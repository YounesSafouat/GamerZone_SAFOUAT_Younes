<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GamerZone - {{ $player->user->name }}</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="min-h-screen">
        <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <h1 class="text-xl font-semibold text-gray-900">{{ $player->user->name }}</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="{{ route('players.index') }}" class="text-gray-700 hover:text-gray-900">Back to
                            Players</a>
                        <a href="{{ route('dashboard') }}" class="text-gray-700 hover:text-gray-900">Dashboard</a>
                    </div>
                </div>
            </div>
        </nav>

        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <div class="max-w-4xl mx-auto">
                    <div class="bg-white shadow rounded-lg overflow-hidden">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <div class="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
                                        <span
                                            class="text-white text-2xl font-bold">{{ substr($player->user->name, 0, 1) }}</span>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h2 class="text-2xl font-bold text-gray-900">{{ $player->user->name }}</h2>
                                    <p class="text-gray-600">{{ $player->user->email }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="px-6 py-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div class="bg-gray-50 p-4 rounded-lg">
                                    <h4 class="text-sm font-medium text-gray-500 uppercase tracking-wide">Game Username
                                    </h4>
                                    <p class="mt-1 text-lg font-semibold text-gray-900">{{ $player->game_username }}</p>
                                </div>
                                <div class="bg-gray-50 p-4 rounded-lg">
                                    <h4 class="text-sm font-medium text-gray-500 uppercase tracking-wide">Game Type</h4>
                                    <p class="mt-1 text-lg font-semibold text-gray-900">{{ $player->game_type }}</p>
                                </div>
                            </div>

                            @if ($player->tournament)
                                <div class="mb-6">
                                    <h3 class="text-lg font-medium text-gray-900 mb-4">Tournament Information</h3>
                                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <h4 class="text-lg font-semibold text-blue-900">
                                                    {{ $player->tournament->name }}</h4>
                                                <p class="text-blue-700">{{ $player->tournament->description }}</p>
                                                <div class="mt-2 text-sm text-blue-600">
                                                    <span class="mr-4">Start:
                                                        {{ $player->tournament->start_date->format('M d, Y') }}</span>
                                                    <span>End:
                                                        {{ $player->tournament->end_date->format('M d, Y') }}</span>
                                                </div>
                                            </div>
                                            <span
                                                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                                                @if ($player->tournament->status === 'upcoming') bg-yellow-100 text-yellow-800
                                                @elseif($player->tournament->status === 'ongoing') bg-green-100 text-green-800
                                                @else bg-gray-100 text-gray-800 @endif">
                                                {{ ucfirst($player->tournament->status) }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            @endif

                            <div class="flex justify-end space-x-4">
                                <a href="{{ route('players.edit', $player) }}"
                                    class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                    Edit Player
                                </a>
                                <form method="POST" action="{{ route('players.destroy', $player) }}" class="inline">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit"
                                        class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                                        onclick="return confirm('Are you sure you want to remove this player?')">
                                        Remove Player
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>

</html>
