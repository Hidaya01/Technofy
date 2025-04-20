<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Certification;
use App\Models\UserAnswer;
use App\Models\Answer;

class QuizController extends Controller
{
    public function index()
    {
        return Quiz::with('course', 'questions')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'module_id' => 'nullable|integer',
            'course_id' => 'required|exists:courses,idCourse'
        ]);

        return Quiz::create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Quiz::destroy($id);
        return response()->json(['message' => 'Quiz deleted']);
    }
   
    public function submitQuiz(Request $request, $quizId)
    {
        $userId = auth()->id(); // or $request->user_id
        $quiz = Quiz::with('questions')->findOrFail($quizId);
        $total = $quiz->questions->count();
        $correct = 0;

        foreach ($request->answers as $questionId => $answerId) {
            UserAnswer::create([
                'user_id' => $userId,
                'question_id' => $questionId,
                'answer_id' => $answerId,
            ]);

            $answer = Answer::find($answerId);
            if ($answer && $answer->is_correct) {
                $correct++;
            }
        }

        $score = ($correct / $total) * 100;

        if ($score >= 70) {
            Certification::firstOrCreate([
                'user_id' => $userId,
                'course_id' => $quiz->course_id,
            ]);
        }

        return response()->json(['score' => $score]);
    }

   
}