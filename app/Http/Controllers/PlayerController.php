<?php

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\Tournament;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function index()
    {
        $players = Player::with(['user', 'tournament'])->get();
        return view('players.index', compact('players'));
    }

    public function create()
    {
        $tournaments = Tournament::all();
        return view('players.create', compact('tournaments'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'tournament_id' => 'required|exists:tournaments,id',
            'game_username' => 'required|string|max:255',
            'game_type' => 'required|string|max:255'
        ]);

        $request->merge(['user_id' => auth()->id()]);
        Player::create($request->all());
        return redirect()->route('players.index')->with('success', 'Player registered successfully.');
    }

    public function show(Player $player)
    {
        return view('players.show', compact('player'));
    }

    public function edit(Player $player)
    {
        $tournaments = Tournament::all();
        return view('players.edit', compact('player', 'tournaments'));
    }

    public function update(Request $request, Player $player)
    {
        $request->validate([
            'tournament_id' => 'required|exists:tournaments,id',
            'game_username' => 'required|string|max:255',
            'game_type' => 'required|string|max:255'
        ]);

        $player->update($request->all());
        return redirect()->route('players.index')->with('success', 'Player updated successfully.');
    }

    public function destroy(Player $player)
    {
        $player->delete();
        return redirect()->route('players.index')->with('success', 'Player removed successfully.');
    }
} 