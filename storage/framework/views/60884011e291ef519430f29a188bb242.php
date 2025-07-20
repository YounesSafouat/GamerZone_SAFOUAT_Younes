<?php if (isset($component)) { $__componentOriginal9ac128a9029c0e4701924bd2d73d7f54 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54 = $attributes; } ?>
<?php $component = App\View\Components\AppLayout::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('app-layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\App\View\Components\AppLayout::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
     <?php $__env->slot('header', null, []); ?> 
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            <?php echo e(__('Player Details')); ?>

        </h2>
     <?php $__env->endSlot(); ?>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <div class="mb-6">
                        <h3 class="text-lg font-medium text-gray-900 mb-4">Player Information</h3>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Name</label>
                                <p class="mt-1 text-sm text-gray-900"><?php echo e($player->user->name); ?></p>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700">Email</label>
                                <p class="mt-1 text-sm text-gray-900"><?php echo e($player->user->email); ?></p>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700">Game Username</label>
                                <p class="mt-1 text-sm text-gray-900"><?php echo e($player->game_username); ?></p>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700">Game Type</label>
                                <p class="mt-1 text-sm text-gray-900"><?php echo e($player->game_type); ?></p>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700">Tournament</label>
                                <p class="mt-1 text-sm text-gray-900">
                                    <?php echo e($player->tournament ? $player->tournament->name : 'Not registered for any tournament'); ?>

                                </p>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700">Created At</label>
                                <p class="mt-1 text-sm text-gray-900"><?php echo e($player->created_at->format('M d, Y H:i')); ?>

                                </p>
                            </div>
                        </div>
                    </div>

                    <?php if($player->tournament): ?>
                        <div class="mb-6">
                            <h3 class="text-lg font-medium text-gray-900 mb-4">Tournament Information</h3>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Tournament Name</label>
                                    <p class="mt-1 text-sm text-gray-900"><?php echo e($player->tournament->name); ?></p>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Description</label>
                                    <p class="mt-1 text-sm text-gray-900"><?php echo e($player->tournament->description); ?></p>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Start Date</label>
                                    <p class="mt-1 text-sm text-gray-900">
                                        <?php echo e($player->tournament->start_date->format('M d, Y')); ?></p>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">End Date</label>
                                    <p class="mt-1 text-sm text-gray-900">
                                        <?php echo e($player->tournament->end_date->format('M d, Y')); ?></p>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Status</label>
                                    <p class="mt-1 text-sm text-gray-900"><?php echo e(ucfirst($player->tournament->status)); ?>

                                    </p>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Max Participants</label>
                                    <p class="mt-1 text-sm text-gray-900"><?php echo e($player->tournament->max_participants); ?>

                                    </p>
                                </div>
                            </div>
                        </div>
                    <?php endif; ?>

                    <div class="flex items-center justify-end">
                        <a href="<?php echo e(route('players.index')); ?>"
                            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
                            Back to Players
                        </a>
                        <?php if(auth()->user()->hasRole('admin') || auth()->user()->hasRole('organizer')): ?>
                            <a href="<?php echo e(route('players.edit', $player->id)); ?>"
                                class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">
                                Edit Player
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54)): ?>
<?php $attributes = $__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54; ?>
<?php unset($__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal9ac128a9029c0e4701924bd2d73d7f54)): ?>
<?php $component = $__componentOriginal9ac128a9029c0e4701924bd2d73d7f54; ?>
<?php unset($__componentOriginal9ac128a9029c0e4701924bd2d73d7f54); ?>
<?php endif; ?>
<?php /**PATH C:\Users\PC\Desktop\fac\laravel\gamerzone\resources\views/players/show.blade.php ENDPATH**/ ?>