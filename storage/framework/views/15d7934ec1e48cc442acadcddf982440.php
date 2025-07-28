<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GamerZone - Edit Player</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="min-h-screen">
        <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <h1 class="text-xl font-semibold text-gray-900">Edit Player</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="<?php echo e(route('players.show', $player)); ?>" class="text-gray-700 hover:text-gray-900">Back to
                            Player</a>
                        <a href="<?php echo e(route('players.index')); ?>" class="text-gray-700 hover:text-gray-900">All Players</a>
                    </div>
                </div>
            </div>
        </nav>

        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <div class="max-w-2xl mx-auto">
                    <div class="bg-white shadow rounded-lg p-6">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Edit Player: <?php echo e($player->user->name); ?></h2>

                        <?php if($errors->any()): ?>
                            <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                                <ul class="list-disc list-inside">
                                    <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <li><?php echo e($error); ?></li>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </ul>
                            </div>
                        <?php endif; ?>

                        <form method="POST" action="<?php echo e(route('players.update', $player)); ?>">
                            <?php echo csrf_field(); ?>
                            <?php echo method_field('PUT'); ?>

                            <div class="mb-4">
                                <label for="tournament_id" class="block text-sm font-medium text-gray-700 mb-2">Select
                                    Tournament</label>
                                <select name="tournament_id" id="tournament_id" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                                    <option value="">Choose a tournament...</option>
                                    <?php $__currentLoopData = $tournaments; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tournament): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <option value="<?php echo e($tournament->id); ?>"
                                            <?php echo e(old('tournament_id', $player->tournament_id) == $tournament->id ? 'selected' : ''); ?>>
                                            <?php echo e($tournament->name); ?> (<?php echo e($tournament->start_date->format('M d, Y')); ?>)
                                        </option>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </select>
                            </div>

                            <div class="mb-4">
                                <label for="game_username" class="block text-sm font-medium text-gray-700 mb-2">Game
                                    Username</label>
                                <input type="text" name="game_username" id="game_username"
                                    value="<?php echo e(old('game_username', $player->game_username)); ?>" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Your in-game username">
                            </div>

                            <div class="mb-6">
                                <label for="game_type" class="block text-sm font-medium text-gray-700 mb-2">Game
                                    Type</label>
                                <select name="game_type" id="game_type" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                                    <option value="">Select game type...</option>
                                    <option value="FPS"
                                        <?php echo e(old('game_type', $player->game_type) == 'FPS' ? 'selected' : ''); ?>>FPS
                                        (First Person Shooter)</option>
                                    <option value="MOBA"
                                        <?php echo e(old('game_type', $player->game_type) == 'MOBA' ? 'selected' : ''); ?>>MOBA
                                        (Multiplayer Online Battle Arena)</option>
                                    <option value="RTS"
                                        <?php echo e(old('game_type', $player->game_type) == 'RTS' ? 'selected' : ''); ?>>RTS
                                        (Real-Time Strategy)</option>
                                    <option value="Fighting"
                                        <?php echo e(old('game_type', $player->game_type) == 'Fighting' ? 'selected' : ''); ?>>
                                        Fighting</option>
                                    <option value="Racing"
                                        <?php echo e(old('game_type', $player->game_type) == 'Racing' ? 'selected' : ''); ?>>Racing
                                    </option>
                                    <option value="Sports"
                                        <?php echo e(old('game_type', $player->game_type) == 'Sports' ? 'selected' : ''); ?>>Sports
                                    </option>
                                    <option value="Other"
                                        <?php echo e(old('game_type', $player->game_type) == 'Other' ? 'selected' : ''); ?>>Other
                                    </option>
                                </select>
                            </div>

                            <div class="flex justify-end space-x-4">
                                <a href="<?php echo e(route('players.show', $player)); ?>"
                                    class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
                                    Cancel
                                </a>
                                <button type="submit"
                                    class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                                    Update Player
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
<?php /**PATH C:\Users\PC\Desktop\fac\laravel\gamerzone\resources\views/players/edit.blade.php ENDPATH**/ ?>