<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\User;
use App\Models\Tournament;
use App\Models\Player;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Create roles
        $roles = [
            ['name' => 'admin', 'description' => 'Administrator with full access'],
            ['name' => 'organizer', 'description' => 'Tournament organizer'],
            ['name' => 'player', 'description' => 'Game player']
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }

        // Create users with roles
        $admin = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@gamerzone.com',
        ]);
        $admin->roles()->attach(Role::where('name', 'admin')->first());

        $organizer = User::factory()->create([
            'name' => 'Organizer User',
            'email' => 'organizer@gamerzone.com',
        ]);
        $organizer->roles()->attach(Role::where('name', 'organizer')->first());

        $player = User::factory()->create([
            'name' => 'Player User',
            'email' => 'player@gamerzone.com',
        ]);
        $player->roles()->attach(Role::where('name', 'player')->first());

        // Create tournaments
        Tournament::factory(5)->create();

        // Create players
        Player::factory(10)->create();
    }
} 