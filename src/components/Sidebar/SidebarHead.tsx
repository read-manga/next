import { JSX } from "react";
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export default function SidebarHead(): JSX.Element {
  return (
    <SidebarHeader className="py-2 px-2">
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="p-2 transition-all delay-100 duration-500 hover:bg-[var(--sidebar-border)] rounded-lg">
            <h1 className="mouseevent-none uppercase whitespace-nowrap w-full text-center text-xl font-bold">Read Manga</h1>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
