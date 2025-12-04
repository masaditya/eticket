import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { type UserType } from '@/types';

export function UserInfo({
    user,
    showEmail = false,
    showRole = true,
}: {
    user: UserType;
    showEmail?: boolean;
    showRole?: boolean;
}) {
    const getInitials = useInitials();

    return (
        <>
            <Avatar className="h-6 w-6 overflow-hidden rounded-full">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                    {getInitials(user.name)}
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium text-base text-muted-foreground">{user.name}</span>
                {showEmail && (
                    <span className="truncate text-xs text-muted-foreground">
                        {user.email}
                    </span>
                )}
                {showRole && user.roles && user.roles.length > 0 && (
                    <span className="truncate text-xs text-muted-foreground">
                        {Array.isArray(user.roles)
                            ? user.roles
                                  .map((r) =>
                                      typeof r === 'string'
                                          ? r
                                          : ((r as any).name ?? String(r)),
                                  )
                                  .join(', ')
                            : String(user.roles)}
                    </span>
                )}
            </div>
        </>
    );
}
