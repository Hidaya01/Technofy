<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;
    protected $primaryKey = 'idQuiz';

    protected $fillable = ['title', 'module_id', 'course_id'];

    public function course() {
        return $this->belongsTo(Course::class, 'course_id');
    }

    public function questions() {
        return $this->hasMany(Question::class, 'quiz_id');
    }
}
