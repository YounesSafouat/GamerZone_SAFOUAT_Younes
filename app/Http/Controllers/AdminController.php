<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Tournament;
use App\Models\Player;

class AdminController extends Controller
{
    public function dashboard()
    {
        $stats = [
            'total_users' => User::count(),
            'total_tournaments' => Tournament::count(),
            'total_players' => Player::count(),
            'upcoming_tournaments' => Tournament::where('status', 'upcoming')->count(),
            'ongoing_tournaments' => Tournament::where('status', 'ongoing')->count(),
            'completed_tournaments' => Tournament::where('status', 'completed')->count(),
        ];

        return view('admin.dashboard', compact('stats'));
    }
} 