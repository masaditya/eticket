<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $fillable = [
        'order_id',
        'event_seat_id',
        'ticket_category_id',
        'price',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function seat()
    {
        return $this->belongsTo(EventSeat::class, 'event_seat_id');
    }

    public function category()
    {
        return $this->belongsTo(TicketCategory::class, 'ticket_category_id');
    }
}
