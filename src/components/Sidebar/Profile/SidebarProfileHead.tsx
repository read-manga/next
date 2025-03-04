import { JSX } from "react";
import { SidebarHeader, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellIcon } from "lucide-react";

export default function SidebarProfileHead(): JSX.Element {
  return (
    <SidebarHeader className="py-4 px-2">
      <SidebarMenu>
        <SidebarMenuItem className="sm:max-h-[40px] md:max-h-[40px] max-h-[40px]">
          <div className="flex h-full items-center justify-center gap-2">
            <SidebarMenuButton isActive className="max-w-11 h-full flex items-center justify-center">
              <BellIcon className="w-full h-full"/>
            </SidebarMenuButton>
            <span className="text-lg font-bold flex items-center gap-2 whitespace-nowrap">
              @Seven Proxy
            </span>
            <Avatar className="border-2 border-transparent outline-2 outline-green-400 pointer-events-none select-none max-w-[40px] min-w-[30px] min-h-[30px] w-full h-full rounded-xl">
              <AvatarImage  width={100} height={100} className="w-full h-full" src="https://preview.redd.it/there-was-a-music-album-featuring-this-image-of-lain-on-the-v0-dxnvadrmipza1.png?width=1080&crop=smart&auto=webp&s=fe71d1f48a1c2e60c5f9c1fbfa73addabd2b9a41" alt="@Proxy"/>
              <AvatarFallback>Proxy</AvatarFallback>
            </Avatar>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
