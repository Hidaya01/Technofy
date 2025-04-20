<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $primaryKey = 'idUser';

    protected $fillable = [
        'name', 'prenom', 'email', 'password', 'role', 'avatar', 'level'
    ];


    public function coursesTaught() {
        return $this->hasMany(Course::class, 'user_id');
    }

    public function enrolledCourses() {
        return $this->belongsToMany(Course::class, 'course_user', 'idUser', 'idCourse');
    }

    public function certifications() {
        return $this->hasMany(Certification::class, 'user_id');
    }

    public function progresses() {
        return $this->hasMany(Progress::class, 'user_id');
    }

    public function answers() {
        return $this->hasMany(Answer::class, 'user_id');
    }
    public function userAnswers()
    {
        return $this->hasMany(UserAnswer::class, 'user_id', 'idUser');
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
