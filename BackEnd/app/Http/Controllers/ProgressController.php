<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProgressController extends Controller
{
    public function index() {
        return Progress::with('user', 'course')->get();
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'user_id' => 'required|exists:users,idUser',
            'course_id' => 'required|exists:courses,idCourse'
        ]);

        return Progress::create($validated);
    }

    public function destroy($id) {
        Progress::destroy($id);
        return response()->json(['message' => 'Progress deleted']);
    }
}