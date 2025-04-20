<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    // List all courses
    public function index()
    {
        return response()->json(Course::all());
    }

    // Show one course
    public function show($id)
    {
        $course = Course::find($id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }

        return response()->json($course);
    }

    // Create a course
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'level' => 'required|integer',
            'duration' => 'required|integer',
            'language' => 'required|string',
            'type' => 'required|string|in:IDE,PL,L',
            'user_id' => 'required|exists:users,idUser',
            'youtube_url' => 'nullable|url',
            'pdf_detail' => 'nullable|file|mimes:pdf|max:2048',
            'pdf_resume' => 'nullable|file|mimes:pdf|max:2048',
        ]);

        // Handle PDF upload
        $pdfDetailPath = $request->file('pdf_detail')?->store('courses/pdfs', 'public');
        $pdfResumePath = $request->file('pdf_resume')?->store('courses/pdfs', 'public');

        $course = Course::create([
            'title' => $request->title,
            'description' => $request->description,
            'level' => $request->level,
            'duration' => $request->duration,
            'language' => $request->language,
            'type' => $request->type,
            'user_id' => $request->user_id,
            'youtube_url' => $request->youtube_url,
            'pdf_detail' => $pdfDetailPath,
            'pdf_resume' => $pdfResumePath,
        ]);

        return response()->json([
            'message' => 'Course created successfully.',
            'course' => $course,
        ], 201);
    }


    // Update a course
    public function update(Request $request, $id)
    {
        $course = Course::find($id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }

        $course->update($request->all());

        return response()->json([
            'message' => 'Course updated successfully.',
            'course' => $course,
        ]);
    }

    // Delete a course
    public function destroy($id)
    {
        $course = Course::find($id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }

        $course->delete();

        return response()->json(['message' => 'Course deleted successfully.']);
    }
}
