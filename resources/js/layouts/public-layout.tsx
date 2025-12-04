import PublicFooter from '@/layouts/app/public-footer-layout';
import PublicHeaderLayout from '@/layouts/app/public-header-layout';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface PublicLayoutProps {
    title?: string;
}

export default function PublicLayout({
    children,
    title,
}: PropsWithChildren<PublicLayoutProps>) {
    const shared = usePage<SharedData>().props;
    const appName = shared?.name ?? 'TRONticket';

    return (
        <>
            <Head title={title ? `${title} — ${appName}` : appName} />
            <PublicHeaderLayout />
            <main className="relative min-h-screen w-full bg-white text-gray-900">
                {children}
            </main>
            <PublicFooter />
        </>
    );
}
