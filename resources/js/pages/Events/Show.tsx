import { EventCard } from '@/components/molecules/event/event-card';
import PublicLayout from '@/layouts/public-layout';
import { type EventType, type TicketCategoryType } from '@/types';
import { Head } from '@inertiajs/react';

export default function EventShow({
    event,
    ticketCategories,
}: {
    event: EventType;
    ticketCategories: TicketCategoryType[];
}) {
    return (
        <PublicLayout title={event.title ?? 'Event Detail'}>
            <Head title={event.title || 'Event Detail'} />
            <div className="p-4">
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="md:col-span-2">
                        <EventCard {...(event as any)} />
                        <div className="mt-4 rounded-xl border p-4">
                            <h3 className="text-lg font-medium">Description</h3>
                            <p className="text-sm text-muted-foreground">
                                {event.description}
                            </p>

                            <h3 className="mt-4 text-lg font-medium">
                                Schedule
                            </h3>
                            <p className="text-sm">
                                {event.start_time} - {event.end_time}
                            </p>

                            <h3 className="mt-4 text-lg font-medium">
                                Sections
                            </h3>
                            <ul className="mt-2 list-disc pl-5 text-sm">
                                {event.sections?.map((s) => (
                                    <li key={s.id}>
                                        {s.name} - Rp
                                        {s.price?.toLocaleString() || '0'}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-xl border p-4">
                            <h3 className="text-lg font-medium">Tickets</h3>
                            <ul className="mt-2 list-inside text-sm">
                                {ticketCategories?.map((c) => (
                                    <li
                                        key={c.id}
                                        className="mb-2 flex items-center justify-between"
                                    >
                                        <div>
                                            <div className="font-medium">
                                                {c.name}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                Quota: {c.quota}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-medium">
                                                Rp{c.price?.toLocaleString()}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
