@echo off
echo ========================================
echo GamerZone Laravel Setup Script
echo ========================================
echo.

echo Installing PHP dependencies...
composer install
if %errorlevel% neq 0 (
    echo Error: Failed to install PHP dependencies
    pause
    exit /b 1
)

echo.
echo Installing Node.js dependencies...
npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install Node.js dependencies
    pause
    exit /b 1
)

echo.
echo Creating .env file...
if not exist .env (
    copy .env.example .env
    echo Created .env file from .env.example
) else (
    echo .env file already exists
)

echo.
echo Generating application key...
php artisan key:generate
if %errorlevel% neq 0 (
    echo Error: Failed to generate application key
    pause
    exit /b 1
)

echo.
echo Running database migrations...
php artisan migrate
if %errorlevel% neq 0 (
    echo Error: Failed to run migrations
    pause
    exit /b 1
)

echo.
echo Seeding database...
php artisan db:seed
if %errorlevel% neq 0 (
    echo Error: Failed to seed database
    pause
    exit /b 1
)

echo.
echo Creating test users...
php artisan user:create-test
if %errorlevel% neq 0 (
    echo Error: Failed to create test users
    pause
    exit /b 1
)

echo.
echo Building frontend assets...
npm run build
if %errorlevel% neq 0 (
    echo Error: Failed to build assets
    pause
    exit /b 1
)

echo.
echo ========================================
echo Setup completed successfully!
echo ========================================
echo.
echo Test user credentials:
echo Admin: admin@gamerzone.com / password123
echo Organizer: organizer@gamerzone.com / password123
echo Player: player@gamerzone.com / password123
echo.
echo To start the development server, run:
echo php artisan serve
echo.
pause 