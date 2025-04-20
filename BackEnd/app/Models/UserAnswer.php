<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAnswer extends Model
{
    use HasFactory;
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'idUser');
    }

    public function question()
    {
        return $this->belongsTo(Question::class, 'question_id', 'idQuestion');
    }

    public function answer()
    {
        return $this->belongsTo(Answer::class, 'answer_id', 'idAnswer');
    }

}
