<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tournament extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'start_date',
        'end_date',
        'max_participants',
        'status'
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
    ];

    public function players()
    {
        return $this->hasMany(Player::class);
    }
} 