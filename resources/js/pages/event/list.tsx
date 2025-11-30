import { EventCard } from '@/components/molecules/event/event-card';
import PublicHeaderLayout from '@/layouts/app/public-header-layout';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <PublicHeaderLayout />

            <div className="min-h-screen w-full bg-white text-gray-900">
                {/* Hero Section */}

                {/* Nearest Events */}
                <section className="mx-auto max-w-7xl px-6 py-16">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-xl font-semibold">
                            The <span className="text-primary">nearest</span>{' '}
                            event
                        </h2>
                        <a
                            href="#"
                            className="hidden text-sm text-primary hover:underline md:inline-block"
                        >
                            See All{' '}
                            <ArrowUpRight
                                size={16}
                                className="ml-1 inline-block"
                            />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {/* Example Card */}
                        {[1, 2, 3, 4, 5].map((i) => (
                            <EventCard
                                key={i}
                                id={i}
                                title={`This is the nearest event title for event number ${i}. It is a sample event title that is used to demonstrate the layout of the nearest events section.`}
                                banner="https://placehold.co/400x200?text=Event+Banner"
                                start_time="30 Nov 2025 (Sun)"
                                end_time="30 Nov 2025 (Sun)"
                                sections={[
                                    {
                                        id: i,
                                        name: 'General Admission',
                                        price: 350000,
                                    },
                                ]}
                                organizer={{
                                    id: i,
                                    company_name: 'Moka Event Organizer',
                                    contact_email: 'moka@me.com',
                                    contact_phone: '123-456-7890',
                                    user: {
                                        id: i,
                                        name: 'John Doe',
                                        email: `johndoe${i}@example.com`,
                                        avatar: 'https://placehold.co/40?text=No+Logo',
                                    },
                                }}
                            />
                        ))}
                    </div>
                </section>

                {/* Featured Events */}
                <section className="mx-auto max-w-7xl px-6 py-16">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-xl font-semibold">
                            Featured Event
                        </h2>
                        <a
                            href="#"
                            className="hidden text-sm text-primary hover:underline md:inline-block"
                        >
                            See All{' '}
                            <ArrowUpRight
                                size={16}
                                className="ml-1 inline-block"
                            />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <EventCard
                                key={i}
                                id={i}
                                title={`This is the nearest event title for event number ${i}. It is a sample event title that is used to demonstrate the layout of the nearest events section.`}
                                banner="https://placehold.co/400x200?text=Event+Banner"
                                start_time="30 Nov 2025 (Sun)"
                                end_time="30 Nov 2025 (Sun)"
                                sections={[
                                    {
                                        id: i,
                                        name: 'General Admission',
                                        price: 350000,
                                    },
                                ]}
                                organizer={{
                                    id: i,
                                    company_name: 'Moka Event Organizer',
                                    contact_email: 'moka@me.com',
                                    contact_phone: '123-456-7890',
                                    user: {
                                        id: i,
                                        name: 'John Doe',
                                        email: `johndoe${i}@example.com`,
                                        avatar: 'https://placehold.co/40?text=No+Logo',
                                    },
                                }}
                            />
                        ))}
                    </div>
                </section>

                <footer className="mt-10 border-t py-10 text-center text-sm text-gray-500">
                    © 2025 TRONticket. All rights reserved.
                </footer>
            </div>
        </>
    );
}
