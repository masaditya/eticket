<?php

use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\EventController;
use App\Http\Controllers\EventDashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

// Event listing and detail routes (public)
Route::get('/events', [EventController::class, 'index'])->name('events.index');
Route::get('/events/{id}', [EventController::class, 'show'])->name('events.show');

// Checkout routes (public)
Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout.index');
Route::get('/checkout/{id}', [CheckoutController::class, 'show'])->name('checkout.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
    // Optional explicit routes protected by auth and role checks
    // Route::get('dashboard/superadmin', [DashboardController::class, 'dashboardSuperadmin'])->name('dashboard.superadmin');
    // Route::get('dashboard/organizer', [DashboardController::class, 'dashboardOrganizer'])->name('dashboard.organizer');
    // Route::get('dashboard/user', [DashboardController::class, 'dashboardUser'])->name('dashboard.user');

    Route::get('/dashboard/events', [EventDashboardController::class, 'index'])->name('dashboard.events');
});

require __DIR__ . '/settings.php';
