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
        Schema::create('course_user', function (Blueprint $table) {
            $table->unsignedBigInteger('idUser');
    $table->unsignedBigInteger('idCourse');
    $table->foreign('idUser')->references('idUser')->on('users');
    $table->foreign('idCourse')->references('idCourse')->on('courses');
    $table->primary(['idUser', 'idCourse']);
    $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_user');
    }
};
