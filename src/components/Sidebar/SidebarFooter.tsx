'use client';

import { ReactElement } from "react";
import { SidebarFooter, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronUp } from "lucide-react";
import { Toggles } from "@/components/Toggles";
import { useTheme } from "next-themes";

export default function SidebarFooterComponet(): ReactElement {
  const { setTheme } = useTheme();

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild={true}>
              <div className="flex items-center w-full transition-all delay-100 duration-500 bg-[var(--sidebar-border)] rounded-lg">
                <Toggles.Mode /> Theme
                <ChevronUp className="ml-auto" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-[var(--sidebar-border)] px-0" align="end">
              <DropdownMenuItem className="px-1" onClick={() => setTheme("light")}>
                <div className="w-full p-2 transition-all delay-100 duration-500 hover:bg-[var(--sidebar-border)] rounded-lg">
                  Light
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="px-1" onClick={() => setTheme("dark")}>
                <div className="w-full p-2 transition-all delay-100 duration-500 hover:bg-[var(--sidebar-border)] rounded-lg">
                  Dark
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="px-1" onClick={() => setTheme("system")}>
                <div className="w-full p-2 transition-all delay-100 duration-500 hover:bg-[var(--sidebar-border)] rounded-lg">
                  System
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
