<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $primaryKey = 'idQuestion';

    protected $fillable = ['content', 'quiz_id'];

    public function quiz() {
        return $this->belongsTo(Quiz::class, 'quiz_id');
    }

    public function answers() {
        return $this->hasMany(Answer::class, 'question_id');
    }
}
