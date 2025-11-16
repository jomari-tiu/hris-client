import { NavLink } from 'react-router-dom';
import { FiBell, FiSettings } from 'react-icons/fi';
import { cn } from '@/utils/cn';

const bottomNavigationItems = [
  {
    name: 'Notifications',
    href: '/notifications',
    icon: FiBell,
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: FiSettings,
  },
];

type SidebarBottomSectionProps = {
  isActiveRoute: (href: string) => boolean;
  onNavigationClick: () => void;
};

export function SidebarBottomSection({
  isActiveRoute,
  onNavigationClick,
}: SidebarBottomSectionProps) {
  return (
    <div className=" py-4 border-t border-border/20">
      <div className="space-y-2">
        {bottomNavigationItems.map(item => {
          const Icon = item.icon;
          const isActive = isActiveRoute(item.href);

          return (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={onNavigationClick}
              className={cn(
                'group flex items-center px-3 py-1 text-sm font-medium transition-all duration-200 mx-2 relative',
                isActive
                  ? 'bg-background text-primary shadow-lg shadow-primary/25'
                  : 'text-background hover:bg-accent hover:text-foreground'
              )}
            >
              <Icon
                className={cn(
                  'mr-3 flex-shrink-0 w-5 h-5 transition-colors duration-200',
                  isActive
                    ? 'text-primary'
                    : 'text-background group-hover:text-foreground'
                )}
              />
              {item.name}
              {isActive && (
                <div className="absolute right-3 w-2 h-2 bg-prmary rounded-full opacity-80" />
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
