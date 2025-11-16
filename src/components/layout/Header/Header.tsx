import { FiMenu, FiBell, FiSearch, FiUser } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

type HeaderProps = {
  onMenuClick: () => void;
};

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-card backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Left side */}
        <div className="flex items-center">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden hover:bg-accent"
          >
            <FiMenu className="w-6 h-6 text-foreground" />
          </Button>

          {/* Search bar */}
          <div className="hidden sm:block ml-4 lg:ml-0">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search employees, departments..."
                className="pl-10 w-64 bg-input border-0 rounded-lg focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-2">
          {/* Notifications */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-accent rounded-lg"
            >
              <FiBell className="w-5 h-5 text-foreground" />
            </Button>
            <Badge className="absolute -top-1 -right-1 h-2 w-2 p-0 bg-danger rounded-full" />
          </div>

          {/* User menu */}
          <Button
            variant="ghost"
            className="flex items-center space-x-3 hover:bg-accent rounded-lg p-2"
          >
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-white">
                <FiUser className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-foreground">John Doe</p>
              <p className="text-xs text-gray-500">HR Manager</p>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
