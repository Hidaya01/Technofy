<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        // Premier admin
        User::updateOrCreate(
            ['email' => 'admin@admin.com'],
            [
                'name' => 'Admin Test',
                'email' => 'admin@admin.com',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ]
        );

        // Deuxième admin
        User::updateOrCreate(
            ['email' => 'admin2@admin.com'],
            [
                'name' => 'Admin Second',
                'email' => 'admin2@admin.com',
                'password' => Hash::make('admin1234'), // tu peux modifier le mot de passe
                'role' => 'admin',
            ]
        );

        // Troixième admin
        User::updateOrCreate(
            ['email' => 'firdaous@admin.com'],
            [
                'name' => 'Firdaous berrouho',
                'email' => 'firdaous@admin.com',
                'password' => Hash::make('firdaous1234'), // tu peux modifier le mot de passe
                'role' => 'admin',
            ]
        );
    }
}
