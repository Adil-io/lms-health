import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, LogOut } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Header = () => {
  const [Dark, setDark] = useState(false);

  return (
    <header className="relative flex justify-between items-center bg-background h-[70px] px-[180px]">
      <h1 className="text-4xl text-primary-custom font-bold tracking-tighter cursor-pointer">
        Wings
      </h1>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full stroke-none cursor-pointer ring-0">
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
              <span className="flex align-baseline gap-1">
                <Moon className="fill-foreground stroke-none" />
                <p>Dark Mode</p>
              </span>
              <Switch />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="flex align-baseline gap-1">
              <LogOut className="fill-foreground stroke-none" />
              <p>Sign Out</p>
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
