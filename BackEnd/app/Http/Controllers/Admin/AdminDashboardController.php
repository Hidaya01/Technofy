<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

use App\Models\Course;
use App\Models\Comment;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $userCount = User::count();
        $formateurCount = User::where('role', 'formateur')->count();
        $etudiantCount = User::where('role', 'etudiant')->count();

        return response()->json([
            'total_users' => $userCount,
            'formateurs' => $formateurCount,
            'etudiants' => $etudiantCount,
        ]);
    }
    public function getStats()
    {
        $courses = Course::count();
        $users = User::count();
        $comments = Comment::count();
        $reports = 0; // Remplace ceci par une vraie logique si tu as un modèle "Report"
    
        return response()->json([
            'courses' => $courses,
            'users' => $users,
            'comments' => $comments,
            'reports' => $reports,
        ]);
    }
}

