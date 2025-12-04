<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $user = Auth::user();

        if ($user && method_exists($user, 'hasRole')) {
            if ($user->hasRole('superadmin')) {
                return Inertia::render('dashboards/SuperAdminDashboard');
            }

            if ($user->hasRole('organizer')) {
                return Inertia::render('dashboards/organizer');
            }
        }
        // default to end user dashboard
        return Inertia::render('dashboards/UserDashboard');
    }

    public function dashboardSuperadmin()
    {
        return Inertia::render('dashboards/SuperAdminDashboard');
    }

    public function dashboardOrganizer()
    {
        return Inertia::render('dashboards/organizer');
    }

    public function dashboardUser()
    {
        $user = Auth::user();
        abort_unless($user, 403);
        return Inertia::render('dashboards/UserDashboard');
    }
}
