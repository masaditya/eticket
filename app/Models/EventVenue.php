<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventVenue extends Model
{
    protected $fillable = ['event_id', 'venue_name', 'capacity'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
