import { Button } from '@/components/ui/button';
import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';

export default function PublicHeaderLayout({}: PropsWithChildren<{
    breadcrumbs?: BreadcrumbItem[];
}>) {
    return (
        <>
            <header className="z-50 w-full border-b border-gray-200 bg-white backdrop-blur-md">
                <div className="bg-primary">
                    <nav className="mx-auto flex max-w-7xl items-center justify-end gap-8 px-6 py-3">
                        <a
                            href="#"
                            className="text-sm text-white transition hover:text-secondary"
                        >
                            Browse Events
                        </a>
                        <a
                            href="#"
                            className="text-sm text-white transition hover:text-secondary"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-sm text-white transition hover:text-secondary"
                        >
                            Help
                        </a>
                    </nav>
                </div>
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-2 text-xl font-semibold">
                        <img src="/assets/logo.svg" alt="tron-logo" />
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="ghost">Daftar</Button>
                        <Button className="bg-primary text-white hover:bg-primary/90">
                            Masuk
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
}
