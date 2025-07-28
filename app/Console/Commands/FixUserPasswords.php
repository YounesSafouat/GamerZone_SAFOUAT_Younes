<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Models\Role;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class FixUserPasswords extends Command
{
    protected $signature = 'users:fix-passwords';
    protected $description = 'Fix user passwords to match expected credentials';

    public function handle()
    {
        $this->info('Fixing user passwords...');

        // Update or create admin user
        $admin = User::updateOrCreate(
            ['email' => 'admin@gamerzone.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password123'),
            ]
        );
        
        if (!$admin->roles()->where('name', 'admin')->exists()) {
            $adminRole = Role::where('name', 'admin')->first();
            if ($adminRole) {
                $admin->roles()->attach($adminRole);
            }
        }

        // Update or create organizer user
        $organizer = User::updateOrCreate(
            ['email' => 'organizer@gamerzone.com'],
            [
                'name' => 'Organizer User',
                'password' => Hash::make('password123'),
            ]
        );
        
        if (!$organizer->roles()->where('name', 'organizer')->exists()) {
            $organizerRole = Role::where('name', 'organizer')->first();
            if ($organizerRole) {
                $organizer->roles()->attach($organizerRole);
            }
        }

        // Update or create player user
        $player = User::updateOrCreate(
            ['email' => 'player@gamerzone.com'],
            [
                'name' => 'Player User',
                'password' => Hash::make('password123'),
            ]
        );
        
        if (!$player->roles()->where('name', 'player')->exists()) {
            $playerRole = Role::where('name', 'player')->first();
            if ($playerRole) {
                $player->roles()->attach($playerRole);
            }
        }

        $this->info('User passwords fixed successfully!');
        $this->info('Admin: admin@gamerzone.com / password123');
        $this->info('Organizer: organizer@gamerzone.com / password123');
        $this->info('Player: player@gamerzone.com / password123');
    }
} 