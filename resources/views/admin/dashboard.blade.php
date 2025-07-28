<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GamerZone - Admin Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="min-h-screen">
        <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <h1 class="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="{{ route('dashboard') }}" class="text-gray-700 hover:text-gray-900">Dashboard</a>
                        <a href="{{ route('tournaments.index') }}"
                            class="text-gray-700 hover:text-gray-900">Tournaments</a>
                        <a href="{{ route('players.index') }}" class="text-gray-700 hover:text-gray-900">Players</a>
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <button type="submit" class="text-gray-700 hover:text-gray-900">Logout</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>

        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <div class="mb-8">
                    <h2 class="text-3xl font-bold text-gray-900">Welcome, {{ auth()->user()->name }}!</h2>
                    <p class="mt-2 text-gray-600">Here's an overview of your GamerZone platform.</p>
                </div>

                <!-- Statistics Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="p-5">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                                        <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt class="text-sm font-medium text-gray-500 truncate">Total Users</dt>
                                        <dd class="text-lg font-medium text-gray-900">{{ $stats['total_users'] }}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="p-5">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <div class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                                        <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt class="text-sm font-medium text-gray-500 truncate">Total Tournaments</dt>
                                        <dd class="text-lg font-medium text-gray-900">{{ $stats['total_tournaments'] }}
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="p-5">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <div class="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
                                        <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt class="text-sm font-medium text-gray-500 truncate">Total Players</dt>
                                        <dd class="text-lg font-medium text-gray-900">{{ $stats['total_players'] }}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="p-5">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <div class="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                                        <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt class="text-sm font-medium text-gray-500 truncate">Active Tournaments</dt>
                                        <dd class="text-lg font-medium text-gray-900">
                                            {{ $stats['ongoing_tournaments'] }}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tournament Status Breakdown -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div class="bg-white shadow rounded-lg p-6">
                        <h3 class="text-lg font-medium text-gray-900 mb-4">Tournament Status</h3>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-600">Upcoming</span>
                                <span
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    {{ $stats['upcoming_tournaments'] }}
                                </span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-600">Ongoing</span>
                                <span
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    {{ $stats['ongoing_tournaments'] }}
                                </span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-600">Completed</span>
                                <span
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    {{ $stats['completed_tournaments'] }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white shadow rounded-lg p-6">
                        <h3 class="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                        <div class="space-y-3">
                            <a href="{{ route('tournaments.create') }}"
                                class="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700">
                                Create Tournament
                            </a>
                            <a href="{{ route('tournaments.index') }}"
                                class="block w-full bg-green-600 text-white text-center px-4 py-2 rounded-md hover:bg-green-700">
                                Manage Tournaments
                            </a>
                            <a href="{{ route('players.index') }}"
                                class="block w-full bg-purple-600 text-white text-center px-4 py-2 rounded-md hover:bg-purple-700">
                                View Players
                            </a>
                        </div>
                    </div>

                    <div class="bg-white shadow rounded-lg p-6">
                        <h3 class="text-lg font-medium text-gray-900 mb-4">Platform Info</h3>
                        <div class="space-y-3 text-sm text-gray-600">
                            <div class="flex justify-between">
                                <span>Laravel Version:</span>
                                <span class="font-medium">{{ app()->version() }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>PHP Version:</span>
                                <span class="font-medium">{{ phpversion() }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Environment:</span>
                                <span class="font-medium">{{ config('app.env') }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Activity -->
                <div class="bg-white shadow rounded-lg p-6">
                    <h3 class="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
                    <div class="text-center text-gray-500 py-8">
                        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                            </path>
                        </svg>
                        <p class="mt-2">No recent activity to display</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>

</html>
