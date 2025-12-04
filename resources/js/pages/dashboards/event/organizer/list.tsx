import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table';
import { Eye, Trash } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Events',
        href: '/dashboard/organizer/events',
    },
];

// Dummy Data
const events = [
    {
        code: 'TBS293SD',
        name: 'APLI Award',
        pic: 'Sofia Chen',
        email: 'sofia.chen@email.com',
        phone: '+6289712345678',
        date: '24 Nov 25',
        time: '12:00',
        participant: 2,
        status: 'Check-In',
    },
    {
        code: 'TNLS28aS',
        name: 'PT Kereta Api Indonesia',
        pic: 'Marcus Lee',
        email: 'marcus.lee@email.com',
        phone: '+6282109876543',
        date: '-',
        time: '-',
        participant: 2,
        status: 'Absence',
    },
];

export default function EventsPage() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [filter, setFilter] = useState('');

    const columns: ColumnDef<any>[] = [
        { accessorKey: 'code', header: 'Event Code' },
        { accessorKey: 'name', header: 'Event Name' },
        { accessorKey: 'pic', header: 'PIC' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'phone', header: 'No PIC' },
        { accessorKey: 'participant', header: 'Participant' },
        { accessorKey: 'date', header: 'Last Check In' },
        {
            accessorKey: 'status',
            header: 'Status',
            cell: ({ row }) => {
                const v: string = row.getValue('status');
                return (
                    <span
                        className={
                            v === 'Check-In'
                                ? 'rounded bg-blue-100 px-2 py-1 text-xs text-blue-600'
                                : 'rounded bg-red-100 px-2 py-1 text-xs text-red-600'
                        }
                    >
                        {v}
                    </span>
                );
            },
        },
        {
            accessorKey: 'action',
            header: 'Action',
            cell: ({ row }) => {
                const v: string = row.getValue('status');
                return (
                    <div className="flex items-center gap-2">
                        <span className="text-sm">
                            <Eye size={16} className="text-gray-500" />
                        </span>
                        <span className="text-sm">
                            <Trash size={16} className="text-gray-500" />
                        </span>
                    </div>
                );
            },
        },
    ];

    const table = useReactTable({
        data: events,
        columns,
        state: { sorting, globalFilter: filter },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Organizer Dashboard" />
            <div className="w-full space-y-4 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Events</h1>
                    <Button className="rounded-sm">Create Event</Button>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="all" className="border-b p-0">
                    <TabsList className="bg-transparent p-0">
                        <TabsTrigger value="all">All Event</TabsTrigger>
                        <TabsTrigger value="ongoing">On Going</TabsTrigger>
                        <TabsTrigger value="past">Past Event</TabsTrigger>
                        <TabsTrigger value="draft">Draft</TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* Search */}
                {/* <Input
                    placeholder="Search event..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="max-w-xs"
                /> */}

                {/* Table */}
                <div className="min-h-[60vh] rounded-md border bg-white">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((hg) => (
                                <TableRow key={hg.id}>
                                    {hg.headers.map((h) => (
                                        <TableHead
                                            key={h.id}
                                            className="cursor-pointer select-none"
                                            onClick={h.column.getToggleSortingHandler()}
                                        >
                                            {flexRender(
                                                h.column.columnDef.header,
                                                h.getContext(),
                                            )}
                                            {h.column.getIsSorted() === 'asc' &&
                                                ' ▲'}
                                            {h.column.getIsSorted() ===
                                                'desc' && ' ▼'}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>

                        <TableBody>
                            {table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-end gap-2">
                    <Button
                        variant="outline"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Prev
                    </Button>
                    <span>
                        Page {table.getState().pagination.pageIndex + 1} of{' '}
                        {table.getPageCount()}
                    </span>
                    <Button
                        variant="outline"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </AppLayout>
    );
}
