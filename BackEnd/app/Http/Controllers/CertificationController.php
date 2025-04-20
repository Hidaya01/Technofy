<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CertificationController extends Controller
{
    public function index() {
        return Comment::with('course')->get();
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'course_id' => 'required|exists:courses,idCourse'
        ]);

        return Comment::create($validated);
    }

    public function destroy($id) {
        Comment::destroy($id);
        return response()->json(['message' => 'Comment deleted']);
    }
}