<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSeeder extends Seeder
{
    public function run(): void
    {


       
        DB::table('courses')->insert([
            [
                'title' => 'Introduction to React',
                'description' => 'Learn the basics of React framework.',
                'level' => 1,
                'duration' => 10,
                'language' => 'English',
                'user_id' => 1,
                'type' => 'PL',
                'youtube_url' => 'https://youtube.com/example1',
                'pdf_detail' => 'react_detail.pdf',
                'pdf_resume' => 'react_resume.pdf',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Laravel for Beginners',
                'description' => 'Build your first Laravel app.',
                'level' => 2,
                'duration' => 15,
                'language' => 'French',
                'user_id' => 1,
                'type' => 'IDE',
                'youtube_url' => 'https://youtube.com/example2',
                'pdf_detail' => 'laravel_detail.pdf',
                'pdf_resume' => 'laravel_resume.pdf',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
