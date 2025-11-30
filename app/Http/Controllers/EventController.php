<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\TicketCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the events.
     */
    public function index(Request $request)
    {
        $query = Event::query()
            ->with(['organizer.user', 'venue', 'sections'])
            ->when($request->input('q'), function ($q, $qstr) {
                $q->where('title', 'like', '%' . $qstr . '%');
            });

        $events = $query->orderBy('start_time', 'asc')->paginate(12)->withQueryString();

        return Inertia::render('event/list', [
            'events' => $events,
            'filters' => $request->only(['q']),
        ]);
    }

    /**
     * Display the specified event.
     */
    public function show($id)
    {
        $event = Event::with(['organizer.user', 'venue', 'sections.seats'])->find($id);

        $ticketCategories = TicketCategory::where('event_id', $id)->get();

        return Inertia::render('event/detail', [
            'event' => $event,
            'ticketCategories' => $ticketCategories,
        ]);
    }
}
