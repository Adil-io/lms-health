import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { LogOut, Moon } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex h-[70px] items-center justify-between bg-background px-[100px]">
      <h1 className="cursor-pointer text-4xl font-bold tracking-tighter text-primary-custom">
        Wings
      </h1>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="cursor-pointer rounded-full stroke-none ring-0"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex justify-between gap-5">
              <span className="flex gap-1 align-baseline">
                <Moon className="fill-foreground stroke-none" />
                <p>Dark Mode</p>
              </span>
              <Switch />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="flex gap-1 align-baseline">
              <LogOut />
              <p>Sign Out</p>
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
