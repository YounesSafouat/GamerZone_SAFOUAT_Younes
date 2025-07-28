# GamerZone Laravel Application

A comprehensive gaming tournament management system built with Laravel 11.

## Features

- **User Authentication**: Built with Laravel Breeze
- **Role-Based Access Control**: Admin, Organizer, and Player roles
- **Tournament Management**: Create, edit, and manage tournaments
- **Player Registration**: Players can register for tournaments
- **Admin Dashboard**: Statistics and system overview
- **Database Seeding**: Pre-populated with test data

## Requirements

- PHP 8.1 or higher
- Composer
- SQLite (or MySQL/PostgreSQL)

## Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd gamerzone
   ```

2. **Install PHP dependencies**:
   ```bash
   composer install
   ```

3. **Install Node.js dependencies** (for frontend assets):
   ```bash
   npm install
   ```

4. **Set up environment file**:
   ```bash
   cp .env.example .env
   ```

5. **Generate application key**:
   ```bash
   php artisan key:generate
   ```

6. **Configure database**:
   - Edit `.env` file and set your database configuration
   - For SQLite (default): `DB_CONNECTION=sqlite`
   - For MySQL: Set `DB_HOST`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`

7. **Run database migrations**:
   ```bash
   php artisan migrate
   ```

8. **Seed the database**:
   ```bash
   php artisan db:seed
   ```

9. **Create test users**:
   ```bash
   php artisan user:create-test
   ```

10. **Build frontend assets**:
    ```bash
    npm run build
    ```

11. **Start the development server**:
    ```bash
    php artisan serve
    ```

## Test User Credentials

After running the setup commands, you can log in with these test accounts:

- **Admin**: `admin@gamerzone.com` / `password123`
- **Organizer**: `organizer@gamerzone.com` / `password123`
- **Player**: `player@gamerzone.com` / `password123`

## Project Structure

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
│   ├── dashboard.blade.php
│   └── welcome.blade.php
├── routes/
│   ├── auth.php
│   ├── console.php
│   └── web.php
├── artisan
├── composer.json
└── bootstrap/app.php
```

## Database Schema

### Tables

1. **users** - User accounts with authentication
2. **roles** - User roles (admin, organizer, player)
3. **role_user** - Many-to-many relationship between users and roles
4. **tournaments** - Tournament information and details
5. **players** - Player registrations for tournaments

### Relationships

- Users can have multiple roles (many-to-many)
- Tournaments can have multiple players (one-to-many)
- Players belong to users and tournaments (many-to-one)

## Available Commands

- `php artisan user:create-test` - Create test users with roles
- `php artisan migrate:fresh --seed` - Reset database and seed with data
- `php artisan serve` - Start development server

## Routes

- `/` - Welcome page
- `/dashboard` - User dashboard (authenticated)
- `/tournaments` - Tournament management
- `/players` - Player management
- `/admin` - Admin dashboard (admin role required)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
