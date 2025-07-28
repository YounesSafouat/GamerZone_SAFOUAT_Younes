<?php

namespace Database\Factories;

use App\Models\Player;
use App\Models\User;
use App\Models\Tournament;
use Illuminate\Database\Eloquent\Factories\Factory;

class PlayerFactory extends Factory
{
    protected $model = Player::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'tournament_id' => Tournament::factory(),
            'game_username' => $this->faker->userName(),
            'game_type' => $this->faker->randomElement(['FPS', 'MOBA', 'RTS', 'Fighting', 'Racing']),
        ];
    }
} 