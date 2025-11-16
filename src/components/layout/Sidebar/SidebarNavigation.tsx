import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiFileText,
  FiLayout,
} from 'react-icons/fi';
import { cn } from '@/utils/cn';

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/',
    icon: FiHome,
  },
  {
    name: 'Employees',
    href: '/employees',
    icon: FiUsers,
  },
  {
    name: 'Departments',
    href: '/departments',
    icon: FiUsers,
  },
  {
    name: 'Leave Management',
    href: '/leave',
    icon: FiCalendar,
  },
  {
    name: 'Attendance',
    href: '/attendance',
    icon: FiClock,
  },
  {
    name: 'Payroll',
    href: '/payroll',
    icon: FiDollarSign,
  },
  {
    name: 'Reports',
    href: '/reports',
    icon: FiUsers,
  },
  {
    name: 'Documents',
    href: '/documents',
    icon: FiFileText,
  },
  {
    name: 'Sandbox',
    href: '/sandbox',
    icon: FiLayout,
  },
];

type SidebarNavigationProps = {
  isActiveRoute: (href: string) => boolean;
  onNavigationClick: () => void;
};

export function SidebarNavigation({
  isActiveRoute,
  onNavigationClick,
}: SidebarNavigationProps) {
  return (
    <nav className="flex-1 py-6 space-y-2 overflow-y-auto">
      {navigationItems.map(item => {
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
    </nav>
  );
}
