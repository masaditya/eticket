<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventSeat extends Model
{
    protected $fillable = [
        'event_section_id', 'row_number', 'seat_number', 'status',
    ];
}
