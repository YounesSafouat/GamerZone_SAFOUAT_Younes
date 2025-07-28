<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GamerZone - Reset Password</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="min-h-screen flex items-center justify-center">
        <div class="max-w-md w-full bg-white rounded-lg shadow-md p-6">
            <div class="text-center mb-6">
                <h1 class="text-3xl font-bold text-gray-900">Reset Password</h1>
                <p class="text-gray-600">Enter your new password</p>
            </div>

            @if ($errors->any())
                <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                    <ul class="list-disc list-inside">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form method="POST" action="{{ route('password.store') }}">
                @csrf

                <input type="hidden" name="token" value="{{ $request->route('token') }}">

                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" name="email" id="email" value="{{ old('email', $request->email) }}"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>

                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input type="password" name="password" id="password" required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>

                <div class="mb-6">
                    <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-2">Confirm New
                        Password</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>

                <button type="submit"
                    class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                    Reset Password
                </button>
            </form>

            <div class="mt-6 text-center">
                <p class="text-sm text-gray-600">
                    Remember your password?
                    <a href="{{ route('login') }}" class="text-blue-600 hover:text-blue-800">Sign in here</a>
                </p>
            </div>
        </div>
    </div>
</body>

</html>
