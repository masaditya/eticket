<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $user = User::firstOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Test User',
                'password' => 'password',
                'email_verified_at' => now(),
            ]
        );

        $anotherUser = User::firstOrCreate(
            ['email' => 'another@example.com'],
            [
                'name' => 'Another User',
                'password' => 'password',
                'email_verified_at' => now(),
            ]
        );

        $anotherUserAsUser = User::firstOrCreate(
            ['email' => 'anotheruser@example.com'],
            [
                'name' => 'Another User As User',
                'password' => 'password',
                'email_verified_at' => now(),
            ]
        );


        // Create default roles
        $superadmin = Role::firstOrCreate(['name' => 'superadmin']);
        $organizer = Role::firstOrCreate(['name' => 'organizer']);
        $userRole = Role::firstOrCreate(['name' => 'user']);

        // Attach superadmin to test user for development
        if (! $user->roles()->where('role_id', $superadmin->id)->exists()) {
            $user->roles()->attach($superadmin->id);
        }

         if (! $anotherUser->roles()->where('role_id', $organizer->id)->exists()) {
            $anotherUser->roles()->attach($organizer->id);
        }

        if (! $anotherUserAsUser->roles()->where('role_id', $userRole->id)->exists()) {
            $anotherUserAsUser->roles()->attach($userRole->id);
        }
    }
}
