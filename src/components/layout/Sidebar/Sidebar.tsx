import { useLocation } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarBottomSection } from './SidebarBottomSection';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const handleNavigationClick = () => {
    // Close mobile sidebar when navigating
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-sidebar-gradient backdrop-blur-md shadow-xl transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r border-border/50',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full bg-primary">
          <SidebarHeader onClose={onClose} />
          <SidebarNavigation
            isActiveRoute={isActiveRoute}
            onNavigationClick={handleNavigationClick}
          />
          <SidebarBottomSection
            isActiveRoute={isActiveRoute}
            onNavigationClick={handleNavigationClick}
          />
        </div>
      </div>
    </>
  );
}
