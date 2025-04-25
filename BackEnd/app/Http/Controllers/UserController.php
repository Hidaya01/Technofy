<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    public function isAdmin()
    {
        return $this->role === 'admin';
    }
    
    public function isFormateur()
    {
        return $this->role === 'formateur';
    }
    
    public function isEtudiant()
    {
        return $this->role === 'étudiant';
    }
    
    public function index()
{
    try {
        return response()->json(User::all());
    } catch (\Exception $e) {
        return response()->json(['error' => 'Server Error: '.$e->getMessage()], 500);
    }
}

    public function show(string $id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'role' => $user->role, // Explicitly include role
            'level' => $user->level ?? 'Not specified', // Handle missing level gracefully
            'joinedDate' => $user->created_at,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);
        if (! $user){
            return response()->json(['message'=>'User not found',404]);
        }
        $request->validate([
            'name' => 'sometimes|string|max:100',
            'email' => 'sometimes|email|unique:users,email,' . $id,
            'password' => 'sometimes|min:6|confirmed',
        ]);
        
        if ($request->has('name')){
            $user->name =$request->name;
        }
        if ($request->has('email')){
            $user->email= $request->email;
        }
        if ($request->has('password')){
            $user->password = Hash::make($request->password);
        }

        $user->save();
        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user, // Fix array formatting
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);
        if (! $user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }
}
