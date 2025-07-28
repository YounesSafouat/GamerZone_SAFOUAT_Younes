<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GamerZone - Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="min-h-screen">
        <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <h1 class="text-xl font-semibold text-gray-900">GamerZone Dashboard</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="<?php echo e(route('tournaments.index')); ?>"
                            class="text-gray-700 hover:text-gray-900">Tournaments</a>
                        <a href="<?php echo e(route('players.index')); ?>" class="text-gray-700 hover:text-gray-900">Players</a>
                        <?php if(auth()->user()->hasRole('admin')): ?>
                            <a href="<?php echo e(route('admin.dashboard')); ?>" class="text-gray-700 hover:text-gray-900">Admin</a>
                        <?php endif; ?>
                        <form method="POST" action="<?php echo e(route('logout')); ?>">
                            <?php echo csrf_field(); ?>
                            <button type="submit" class="text-gray-700 hover:text-gray-900">Logout</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>

        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <div class="bg-white rounded-lg shadow p-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Welcome, <?php echo e(auth()->user()->name); ?>!</h2>
                    <p class="text-gray-600 mb-6">You are logged in as a
                        <?php echo e(auth()->user()->roles->first()->name ?? 'user'); ?>.</p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h3 class="text-lg font-semibold text-blue-900">Tournaments</h3>
                            <p class="text-blue-700">Manage and view tournaments</p>
                            <a href="<?php echo e(route('tournaments.index')); ?>"
                                class="inline-block mt-2 text-blue-600 hover:text-blue-800">View Tournaments →</a>
                        </div>

                        <div class="bg-green-50 p-4 rounded-lg">
                            <h3 class="text-lg font-semibold text-green-900">Players</h3>
                            <p class="text-green-700">Manage player registrations</p>
                            <a href="<?php echo e(route('players.index')); ?>"
                                class="inline-block mt-2 text-green-600 hover:text-green-800">View Players →</a>
                        </div>

                        <?php if(auth()->user()->hasRole('admin')): ?>
                            <div class="bg-purple-50 p-4 rounded-lg">
                                <h3 class="text-lg font-semibold text-purple-900">Admin Panel</h3>
                                <p class="text-purple-700">System administration</p>
                                <a href="<?php echo e(route('admin.dashboard')); ?>"
                                    class="inline-block mt-2 text-purple-600 hover:text-purple-800">Admin Panel →</a>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>

</html>
<?php /**PATH C:\Users\PC\Desktop\fac\laravel\gamerzone\resources\views/dashboard.blade.php ENDPATH**/ ?>