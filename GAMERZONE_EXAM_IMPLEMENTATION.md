# GAMERZONE LARAVEL EXAM IMPLEMENTATION

## COMMANDS EXECUTED

### 1. Project Setup
```bash
composer create-project laravel/laravel gamerzone
cd gamerzone
composer require laravel/breeze --dev
php artisan breeze:install
npm install
npm run build
```

### 2. Database Setup
```bash
php artisan make:migration create_roles_table
php artisan make:migration create_tournaments_table
php artisan make:migration create_players_table
php artisan make:migration create_role_user_table
php artisan migrate
```

### 3. Models Creation
```bash
php artisan make:model Role
php artisan make:model Tournament
php artisan make:model Player
```

### 4. Controllers Creation
```bash
php artisan make:controller TournamentController --resource
php artisan make:controller PlayerController --resource
php artisan make:controller AdminController
```

### 5. Middleware Creation
```bash
php artisan make:middleware CheckRole
```

### 6. Custom Command Creation
```bash
php artisan make:command CreateTestUser
```

### 7. Factories and Seeders
```bash
php artisan make:factory RoleFactory
php artisan make:factory TournamentFactory
php artisan make:factory PlayerFactory
php artisan db:seed
```

### 8. Asset Compilation
```bash
npm run build
```

## DATABASE MIGRATIONS

### 1. create_roles_table.php
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('roles');
    }
};
```

### 2. create_tournaments_table.php
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tournaments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->date('start_date');
            $table->date('end_date');
            $table->integer('max_participants');
            $table->enum('status', ['upcoming', 'ongoing', 'completed'])->default('upcoming');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tournaments');
    }
};
```

### 3. create_players_table.php
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('players', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('tournament_id')->constrained()->onDelete('cascade');
            $table->string('game_username');
            $table->string('game_type');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('players');
    }
};
```

### 4. create_role_user_table.php
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('role_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('role_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('role_user');
    }
};
```

## MODELS

### 1. User.php
```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function player()
    {
        return $this->hasOne(Player::class);
    }

    public function hasRole($role)
    {
        return $this->roles()->where('name', $role)->exists();
    }
}
```

### 2. Role.php
```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
```

### 3. Tournament.php
```php
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
```

### 4. Player.php
```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'tournament_id',
        'game_username',
        'game_type'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tournament()
    {
        return $this->belongsTo(Tournament::class);
    }
}
```

## CONTROLLERS

### 1. TournamentController.php
```php
<?php

namespace App\Http\Controllers;

use App\Models\Tournament;
use Illuminate\Http\Request;

class TournamentController extends Controller
{
    public function index()
    {
        $tournaments = Tournament::all();
        return view('tournaments.index', compact('tournaments'));
    }

    public function create()
    {
        return view('tournaments.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'max_participants' => 'required|integer|min:1',
            'status' => 'required|in:upcoming,ongoing,completed'
        ]);

        Tournament::create($request->all());
        return redirect()->route('tournaments.index')->with('success', 'Tournament created successfully.');
    }

    public function show(Tournament $tournament)
    {
        return view('tournaments.show', compact('tournament'));
    }

    public function edit(Tournament $tournament)
    {
        return view('tournaments.edit', compact('tournament'));
    }

    public function update(Request $request, Tournament $tournament)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'max_participants' => 'required|integer|min:1',
            'status' => 'required|in:upcoming,ongoing,completed'
        ]);

        $tournament->update($request->all());
        return redirect()->route('tournaments.index')->with('success', 'Tournament updated successfully.');
    }

    public function destroy(Tournament $tournament)
    {
        $tournament->delete();
        return redirect()->route('tournaments.index')->with('success', 'Tournament deleted successfully.');
    }
}
```

### 2. PlayerController.php
```php
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
```

### 3. AdminController.php
```php
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
```

## MIDDLEWARE

### CheckRole.php
```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (!auth()->check() || !auth()->user()->hasRole($role)) {
            abort(403, 'Unauthorized action.');
        }

        return $next($request);
    }
}
```

## CUSTOM COMMAND

### CreateTestUser.php
```php
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
```

## FACTORIES

### RoleFactory.php
```php
<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RoleFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->randomElement(['admin', 'organizer', 'player']),
            'description' => $this->faker->sentence(),
        ];
    }
}
```

### TournamentFactory.php
```php
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
```

### PlayerFactory.php
```php
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
```

## SEEDER

### DatabaseSeeder.php
```php
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
```

## ROUTES

### web.php
```php
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
```

## MIDDLEWARE REGISTRATION

### bootstrap/app.php
```php
<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            'role' => \App\Http\Middleware\CheckRole::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
```

## ENVIRONMENT CONFIGURATION

### .env (MySQL Configuration)
```env
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:your-app-key-here
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=gamerzone
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME=https
PUSHER_APP_CLUSTER=mt1

VITE_APP_NAME="${APP_NAME}"
VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

## TEST USER CREDENTIALS

```
Admin: admin@gamerzone.com / password123
Organizer: organizer@gamerzone.com / password123
Player: player@gamerzone.com / password123
```

## FINAL COMMANDS TO RUN

```bash
# After all files are created
php artisan migrate:fresh --seed
php artisan user:create-test
npm run build
php artisan serve
```

## PROJECT STRUCTURE

```
gamerzone/
├── app/
│   ├── Console/Commands/CreateTestUser.php
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── AdminController.php
│   │   │   ├── PlayerController.php
│   │   │   └── TournamentController.php
│   │   └── Middleware/CheckRole.php
│   └── Models/
│       ├── Player.php
│       ├── Role.php
│       ├── Tournament.php
│       └── User.php
├── database/
│   ├── factories/
│   │   ├── PlayerFactory.php
│   │   ├── RoleFactory.php
│   │   └── TournamentFactory.php
│   ├── migrations/
│   │   ├── create_players_table.php
│   │   ├── create_roles_table.php
│   │   ├── create_role_user_table.php
│   │   └── create_tournaments_table.php
│   └── seeders/DatabaseSeeder.php
├── resources/views/
│   ├── admin/dashboard.blade.php
│   ├── dashboard.blade.php
│   ├── layouts/navigation.blade.php
│   ├── players/
│   │   ├── create.blade.php
│   │   ├── edit.blade.php
│   │   ├── index.blade.php
│   │   └── show.blade.php
│   └── tournaments/
│       ├── create.blade.php
│       ├── edit.blade.php
│       ├── index.blade.php
│       └── show.blade.php
├── routes/web.php
├── bootstrap/app.php
└── .env
```

This file contains all the essential code and commands needed to recreate the complete GamerZone Laravel application as per the exam requirements. 