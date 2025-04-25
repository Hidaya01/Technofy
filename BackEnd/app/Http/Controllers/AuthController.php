<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // Show the login 
    // public function showLogin()
    // {
    //     return view('auth.login');
    // }

    // login 
    public function login(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    // Authentifier avec session (Sanctum)
    Auth::login($user);

    return response()->json([
        'message' => 'Login successful!',
        'user' => $user,
        "role" => $user->role,
        'user_name' => $user->name, // Send user name to frontend
    ]);
}

    // public function showRegister()
    // {
    //     return view('auth.register');
    // }

    // registration
    public function register(Request $request)
    {
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
            'role' => 'étudiant', // Default role assigned here
        ]);

        Auth::login($user);
        return response()->json([
            'message' => 'Registration successful!',
            'user_name' => $user->name, // Send user name to frontend
        ], 201);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return redirect()->route('login');
    }
}