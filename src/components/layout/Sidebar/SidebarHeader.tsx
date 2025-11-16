import { FiX } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';

type SidebarHeaderProps = {
  onClose: () => void;
};

export const Logo = ({ animate = false }: { animate?: boolean }) => {
  return (
    <div
      className={cn(
        'w-10 h-10 bg-background rounded-xl flex items-center justify-center shadow-md',
        animate && 'animate-pulse'
      )}
    >
      <span className="text-primary font-bold text-sm">HR</span>
    </div>
  );
};

export function SidebarHeader({ onClose }: SidebarHeaderProps) {
  return (
    <div className="flex items-center justify-between min-h-16 py-2 px-6 border-b border-border/20">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <div className="ml-3">
          <h1 className="text-lg font-semibold text-background">HRIS</h1>
          <p className="text-xs text-background">Management System</p>
        </div>
      </div>

      {/* Close button for mobile */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onClose}
        className="lg:hidden text-background hover:bg-accent"
      >
        <FiX className="w-5 h-5" />
      </Button>
    </div>
  );
}
