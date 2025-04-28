<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('quizzes', function (Blueprint $table) {
            $table->id('idQuiz');
            $table->string('title');
            $table->string('type')->default('course'); 

            $table->unsignedBigInteger('module_id')->nullable();
            $table->unsignedBigInteger('course_id');
            $table->foreign('course_id')->references('idCourse')->on('courses');
             // Add 1 question and 4 options + correct answer
             $table->text('question');
             $table->string('option_a');
             $table->string('option_b');
             $table->string('option_c');
             $table->string('option_d');
             $table->string('correct_answer'); // A, B, C, or D
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quizzes');
    }
};