<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventSection extends Model
{
    protected $fillable = ['event_id', 'name', 'price', 'color'];

    public function seats()
    {
        return $this->hasMany(EventSeat::class);
    }
}
