<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GamerZone - Welcome</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="min-h-screen flex items-center justify-center">
        <div class="max-w-md w-full bg-white rounded-lg shadow-md p-6">
            <div class="text-center">
                <h1 class="text-3xl font-bold text-gray-900 mb-4">Welcome to GamerZone</h1>
                <p class="text-gray-600 mb-6">Your ultimate gaming tournament platform</p>

                <?php if(Route::has('login')): ?>
                    <div class="space-y-4">
                        <?php if(auth()->guard()->check()): ?>
                            <a href="<?php echo e(url('/dashboard')); ?>"
                                class="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                                Dashboard
                            </a>
                        <?php else: ?>
                            <a href="<?php echo e(route('login')); ?>"
                                class="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                                Log in
                            </a>

                            <?php if(Route::has('register')): ?>
                                <a href="<?php echo e(route('register')); ?>"
                                    class="block w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-200">
                                    Register
                                </a>
                            <?php endif; ?>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</body>

</html>
<?php /**PATH C:\Users\PC\Desktop\fac\laravel\gamerzone\resources\views/welcome.blade.php ENDPATH**/ ?>