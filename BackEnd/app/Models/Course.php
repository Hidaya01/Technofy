<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $primaryKey = 'idCourse';

    protected $fillable = [
        'title',
        'description',
        'level',
        'duration',
        'language',
        'type',
        'user_id',
        'youtube_url',
        'pdf_detail',
        'pdf_resume',
    ];    

    public function formateur() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function students() {
        return $this->belongsToMany(User::class, 'course_user', 'idCourse', 'idUser');
    }

    public function comments() {
        return $this->hasMany(Comment::class, 'course_id');
    }

    public function quizzes() {
        return $this->hasMany(Quiz::class, 'course_id');
    }

    public function certifications() {
        return $this->hasMany(Certification::class, 'course_id');
    }

    public function progresses() {
        return $this->hasMany(Progress::class, 'course_id');
    }
}
