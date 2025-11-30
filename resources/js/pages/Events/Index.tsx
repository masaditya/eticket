import { EventCard } from '@/components/molecules/event/event-card';
import PublicLayout from '@/layouts/public-layout';
import { type EventType } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

export default function EventsIndex({
    events,
    filters,
}: {
    events: any;
    filters?: any;
}) {
    const [query, setQuery] = useState(filters?.q ?? '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(
            '/events',
            { q: query },
            { preserveState: true, replace: true },
        );
    };

    return (
        <PublicLayout title="Events">
            <Head title="Events" />
            <div className="p-4">
                <div className="mb-4 flex items-center gap-4">
                    <form onSubmit={handleSearch} className="flex gap-2">
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search events"
                            className="rounded-md border p-2"
                        />
                        <button type="submit" className="btn">
                            Search
                        </button>
                    </form>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {events?.data?.map((event: EventType) => (
                        <Link
                            href={`/events/${event.id}`}
                            key={event.id}
                            prefetch
                        >
                            <EventCard {...event} />
                        </Link>
                    ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <div>
                        Page {events?.current_page} of {events?.last_page}
                    </div>
                    <div className="flex gap-2">
                        {events?.prev_page_url && (
                            <Link href={events.prev_page_url} className="btn">
                                Prev
                            </Link>
                        )}
                        {events?.next_page_url && (
                            <Link href={events.next_page_url} className="btn">
                                Next
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
