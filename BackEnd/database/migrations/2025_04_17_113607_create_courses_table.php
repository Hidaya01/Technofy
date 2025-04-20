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
        Schema::create('courses', function (Blueprint $table) {
            $table->id('idCourse');
            $table->string('title');
            $table->text('description');
            $table->integer('level');
            $table->integer('duration');
            $table->string('language');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('idUser')->on('users');
            $table->string('type')->comment('IDE,PL,L'); // IDE, Programming Language, or Language
            // New fields
            $table->string('youtube_url')->nullable();
            $table->string('pdf_detail')->nullable();
            $table->string('pdf_resume')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
