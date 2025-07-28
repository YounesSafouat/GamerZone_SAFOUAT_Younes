<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TournamentController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Tournament routes
    Route::resource('tournaments', TournamentController::class);

    // Player routes
    Route::resource('players', PlayerController::class);

    // Admin routes
    Route::middleware('role:admin')->group(function () {
        Route::get('/admin', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    });
});

require __DIR__.'/auth.php'; 