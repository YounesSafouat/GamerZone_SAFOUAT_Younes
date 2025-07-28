<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GamerZone - Edit Tournament</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="min-h-screen">
        <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <h1 class="text-xl font-semibold text-gray-900">Edit Tournament</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="{{ route('tournaments.show', $tournament) }}"
                            class="text-gray-700 hover:text-gray-900">Back to Tournament</a>
                        <a href="{{ route('tournaments.index') }}" class="text-gray-700 hover:text-gray-900">All
                            Tournaments</a>
                    </div>
                </div>
            </div>
        </nav>

        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <div class="max-w-2xl mx-auto">
                    <div class="bg-white shadow rounded-lg p-6">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Edit Tournament: {{ $tournament->name }}</h2>

                        @if ($errors->any())
                            <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                                <ul class="list-disc list-inside">
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif

                        <form method="POST" action="{{ route('tournaments.update', $tournament) }}">
                            @csrf
                            @method('PUT')

                            <div class="mb-4">
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Tournament
                                    Name</label>
                                <input type="text" name="name" id="name"
                                    value="{{ old('name', $tournament->name) }}" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>

                            <div class="mb-4">
                                <label for="description"
                                    class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                <textarea name="description" id="description" rows="4" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">{{ old('description', $tournament->description) }}</textarea>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label for="start_date" class="block text-sm font-medium text-gray-700 mb-2">Start
                                        Date</label>
                                    <input type="date" name="start_date" id="start_date"
                                        value="{{ old('start_date', $tournament->start_date->format('Y-m-d')) }}"
                                        required
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                </div>
                                <div>
                                    <label for="end_date" class="block text-sm font-medium text-gray-700 mb-2">End
                                        Date</label>
                                    <input type="date" name="end_date" id="end_date"
                                        value="{{ old('end_date', $tournament->end_date->format('Y-m-d')) }}" required
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label for="max_participants"
                                        class="block text-sm font-medium text-gray-700 mb-2">Max Participants</label>
                                    <input type="number" name="max_participants" id="max_participants"
                                        value="{{ old('max_participants', $tournament->max_participants) }}"
                                        min="1" required
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                </div>
                                <div>
                                    <label for="status"
                                        class="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                    <select name="status" id="status" required
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="upcoming"
                                            {{ old('status', $tournament->status) == 'upcoming' ? 'selected' : '' }}>
                                            Upcoming</option>
                                        <option value="ongoing"
                                            {{ old('status', $tournament->status) == 'ongoing' ? 'selected' : '' }}>
                                            Ongoing</option>
                                        <option value="completed"
                                            {{ old('status', $tournament->status) == 'completed' ? 'selected' : '' }}>
                                            Completed</option>
                                    </select>
                                </div>
                            </div>

                            <div class="flex justify-end space-x-4">
                                <a href="{{ route('tournaments.show', $tournament) }}"
                                    class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
                                    Cancel
                                </a>
                                <button type="submit"
                                    class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                    Update Tournament
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>

</html>
