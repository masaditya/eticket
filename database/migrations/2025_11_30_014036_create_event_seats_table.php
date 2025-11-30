<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('event_seats', function (Blueprint $table) {
            $table->id();
            $table->foreignId('event_section_id')->constrained()->cascadeOnDelete();

            // Posisi seat map
            $table->integer('row_number');
            $table->integer('seat_number');

            // Available / Booked / Locked (temporary)
            $table->enum('status', ['available', 'locked', 'booked'])->default('available');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_seats');
    }
};
