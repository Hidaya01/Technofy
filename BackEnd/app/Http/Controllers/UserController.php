<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        return response()->json(User::all());
    }

    public function show(string $id)
    {
        $user = User::find($id);
        if(! $user){
            return response()->json(['message'=>'User not found'],404);
        }
        return response()->json($user);
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
            'name'=>'sometimes|string|max:100',
            'email'=>'sometimes|email|unique:users,email'.$id,
            'password'=>'sometimes|min:6|confirmed',
            
        ]);
        if ($request->has('name')){
            $user->name =$request->name;
        }
        if ($request->has('email')){
            $user->email= $request->email;
        }
        if ($request->has('password')){
            $user->email = Hash::make($request->password);
        }

        $user->save();
         return response()->json(['message'=>'User updated succesfuly','user',$user]);
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
