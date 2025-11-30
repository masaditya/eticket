export const TicketCard = ({
    title,
    price,
}: {
    title: string;
    price: string;
}) => {
    return (
        <div className="rounded-xl border p-4 shadow-sm">
            <div className="mb-2 flex justify-between font-medium">
                {title} <span>{price}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
                The tour follows the release of Rich Brian’s latest album WHERE
                IS MY HEAD? on August 15th…
            </p>
        </div>
    );
};
