<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GamerZone - Tournaments</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="min-h-screen">
        <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <h1 class="text-xl font-semibold text-gray-900">GamerZone Tournaments</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="<?php echo e(route('dashboard')); ?>" class="text-gray-700 hover:text-gray-900">Dashboard</a>
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
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-900">Tournaments</h2>
                    <a href="<?php echo e(route('tournaments.create')); ?>"
                        class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Create Tournament
                    </a>
                </div>

                <?php if(session('success')): ?>
                    <div class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
                        <?php echo e(session('success')); ?>

                    </div>
                <?php endif; ?>

                <div class="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul class="divide-y divide-gray-200">
                        <?php $__empty_1 = true; $__currentLoopData = $tournaments; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tournament): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                            <li>
                                <div class="px-4 py-4 sm:px-6">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <div
                                                    class="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                                                    <span
                                                        class="text-white font-bold"><?php echo e(substr($tournament->name, 0, 1)); ?></span>
                                                </div>
                                            </div>
                                            <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">
                                                    <a href="<?php echo e(route('tournaments.show', $tournament)); ?>"
                                                        class="hover:text-blue-600">
                                                        <?php echo e($tournament->name); ?>

                                                    </a>
                                                </div>
                                                <div class="text-sm text-gray-500">
                                                    <?php echo e(Str::limit($tournament->description, 100)); ?></div>
                                                <div class="mt-1 flex items-center space-x-4 text-xs text-gray-500">
                                                    <span>Start: <?php echo e($tournament->start_date->format('M d, Y')); ?></span>
                                                    <span>End: <?php echo e($tournament->end_date->format('M d, Y')); ?></span>
                                                    <span>Max: <?php echo e($tournament->max_participants); ?> players</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <span
                                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                                <?php if($tournament->status === 'upcoming'): ?> bg-yellow-100 text-yellow-800
                                                <?php elseif($tournament->status === 'ongoing'): ?> bg-green-100 text-green-800
                                                <?php else: ?> bg-gray-100 text-gray-800 <?php endif; ?>">
                                                <?php echo e(ucfirst($tournament->status)); ?>

                                            </span>
                                            <a href="<?php echo e(route('tournaments.edit', $tournament)); ?>"
                                                class="text-blue-600 hover:text-blue-900">Edit</a>
                                            <form method="POST"
                                                action="<?php echo e(route('tournaments.destroy', $tournament)); ?>"
                                                class="inline">
                                                <?php echo csrf_field(); ?>
                                                <?php echo method_field('DELETE'); ?>
                                                <button type="submit" class="text-red-600 hover:text-red-900"
                                                    onclick="return confirm('Are you sure?')">Delete</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            <li class="px-4 py-8 text-center text-gray-500">
                                No tournaments found. <a href="<?php echo e(route('tournaments.create')); ?>"
                                    class="text-blue-600 hover:text-blue-800">Create one now!</a>
                            </li>
                        <?php endif; ?>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</body>

</html>
<?php /**PATH C:\Users\PC\Desktop\fac\laravel\gamerzone\resources\views/tournaments/index.blade.php ENDPATH**/ ?>