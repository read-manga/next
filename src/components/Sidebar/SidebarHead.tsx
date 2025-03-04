import { JSX } from "react";
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export default function SidebarHead(): JSX.Element {
  return (
    <SidebarHeader className="py-2 px-2">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton className="py-4 px-2">
            <h1 className="mouseevent-none uppercase whitespace-nowrap py-2 px-2 w-full text-center text-xl font-bold">Read Manga</h1>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
