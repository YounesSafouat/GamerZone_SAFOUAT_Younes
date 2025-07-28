<?php

namespace Database\Factories;

use App\Models\Tournament;
use Illuminate\Database\Eloquent\Factories\Factory;

class TournamentFactory extends Factory
{
    protected $model = Tournament::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(),
            'start_date' => $this->faker->dateTimeBetween('now', '+2 months'),
            'end_date' => $this->faker->dateTimeBetween('+2 months', '+4 months'),
            'max_participants' => $this->faker->numberBetween(8, 64),
            'status' => $this->faker->randomElement(['upcoming', 'ongoing', 'completed']),
        ];
    }
} 