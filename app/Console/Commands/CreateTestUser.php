<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Models\Role;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateTestUser extends Command
{
    protected $signature = 'user:create-test';
    protected $description = 'Create test users for the application';

    public function handle()
    {
        $roles = Role::all();

        // Create Admin User
        $admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@gamerzone.com',
            'password' => Hash::make('password123'),
        ]);
        $admin->roles()->attach($roles->where('name', 'admin')->first());

        // Create Organizer User
        $organizer = User::create([
            'name' => 'Organizer User',
            'email' => 'organizer@gamerzone.com',
            'password' => Hash::make('password123'),
        ]);
        $organizer->roles()->attach($roles->where('name', 'organizer')->first());

        // Create Player User
        $player = User::create([
            'name' => 'Player User',
            'email' => 'player@gamerzone.com',
            'password' => Hash::make('password123'),
        ]);
        $player->roles()->attach($roles->where('name', 'player')->first());

        $this->info('Test users created successfully!');
        $this->info('Admin: admin@gamerzone.com / password123');
        $this->info('Organizer: organizer@gamerzone.com / password123');
        $this->info('Player: player@gamerzone.com / password123');
    }
} 