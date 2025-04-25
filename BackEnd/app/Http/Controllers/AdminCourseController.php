<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class AdminCourseController extends Controller
{
    public function index()
    {
        // Retourne tous les cours avec leurs infos
        $courses = Course::all();

        return response()->json($courses);
    }
}

