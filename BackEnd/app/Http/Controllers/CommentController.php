<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    // List all comments
    public function index()
    {
        $comments = Comment::with(['user', 'course'])->get();
        return response()->json($comments);
    }

    // Show a specific comment
    public function show($id)
    {
        $comment = Comment::with(['user', 'course'])->find($id);
        if (! $comment) {
            return response()->json(['message' => 'Comment not found'], 404);
        }

        return response()->json($comment);
    }

    // Create a new comment
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'user_id' => 'required|exists:users,idUser',
            'course_id' => 'required|exists:courses,idCourse',
        ]);

        $comment = Comment::create($request->all());

        return response()->json([
            'message' => 'Comment created successfully',
            'comment' => $comment
        ], 201);
    }

    // Update a comment
    public function update(Request $request, $id)
    {
        $comment = Comment::find($id);
        if (! $comment) {
            return response()->json(['message' => 'Comment not found'], 404);
        }

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
        ]);

        $comment->update($request->only(['title', 'content']));

        return response()->json([
            'message' => 'Comment updated successfully',
            'comment' => $comment
        ]);
    }

    // Delete a comment
    public function destroy($id)
    {
        $comment = Comment::find($id);
        if (! $comment) {
            return response()->json(['message' => 'Comment not found'], 404);
        }

        $comment->delete();

        return response()->json(['message' => 'Comment deleted successfully']);
    }
}
