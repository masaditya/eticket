import { Button } from '@/components/ui/button';
import { type BreadcrumbItem } from '@/types';
import { Link } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';

export default function PublicHeaderLayout({}: PropsWithChildren<{
    breadcrumbs?: BreadcrumbItem[];
}>) {
    return (
        <>
            <header className="z-50 w-full border-b border-gray-200 bg-white backdrop-blur-md">
                <div className="bg-primary">
                    <nav className="mx-auto flex max-w-7xl items-center justify-end gap-8 px-6 py-3">
                        <Link
                            href="/events"
                            className="text-sm text-white transition hover:text-secondary"
                        >
                            Browse Events
                        </Link>
                        <a
                            href="/about"
                            className="text-sm text-white transition hover:text-secondary"
                        >
                            About
                        </a>
                        <a
                            href="/help"
                            className="text-sm text-white transition hover:text-secondary"
                        >
                            Help
                        </a>
                    </nav>
                </div>
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-2 text-xl font-semibold">
                        <Link href="/">
                            <img src="/assets/logo.svg" alt="tron-logo" />
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="/register">
                            <Button variant="ghost">Daftar</Button>
                        </Link>
                        <a href="/login">
                            <Button className="bg-primary text-white hover:bg-primary/90">
                                Masuk
                            </Button>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}
