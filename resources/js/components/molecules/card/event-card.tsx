import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { EventType } from '@/types';

export const EventCard = (props: EventType) => {
    const { title, banner, start_time, end_time, sections, organizer } = props;
    return (
        <Card className="cursor-pointer gap-0 overflow-hidden rounded-xl py-0 transition hover:shadow-lg">
            <img
                src={
                    banner ||
                    'https://via.placeholder.com/400x200?text=No+Image+Available'
                }
                alt={title || 'event banner'}
                className="h-40 w-full object-cover"
            />
            <CardContent className="p-3.5">
                <h3 className="mb-1 line-clamp-2 text-lg font-medium">
                    {title}
                </h3>
                <p className="mb-2 text-sm">
                    {start_time} ~ {end_time}
                </p>
                <p className="mb-2 text-sm text-gray-400">
                    Starting from Rp
                    {sections && sections.length > 0
                        ? sections[0].price?.toLocaleString()
                        : '0'}
                </p>
                <CardFooter className="flex items-center gap-3 border-t px-0 pt-4">
                    <img
                        src={
                            organizer?.user?.avatar ||
                            'https://via.placeholder.com/40?text=No+Logo'
                        }
                        alt="organizer-logo"
                        className="h-6 w-6 rounded-full object-cover"
                    />
                    <p className="text-sm">
                        {organizer?.company_name || 'Moka Event Organizer'}
                    </p>
                </CardFooter>
            </CardContent>
        </Card>
    );
};
