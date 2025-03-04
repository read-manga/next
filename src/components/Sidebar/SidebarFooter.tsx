'use client';

import { JSX } from "react";
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronUp, User2 } from "lucide-react";
import { Toggles } from "@/components/Toggles";
import { useTheme } from "next-themes";

export default function SidebarFooterComponet(): JSX.Element {
  const { setTheme } = useTheme();

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton isActive>
                <Toggles.Mode /> Theme
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-[var(--sidebar-border)] px-0" align="end">
              <DropdownMenuItem className="px-1" onClick={() => setTheme("light")}>
                <SidebarMenuButton>
                  Light
                </SidebarMenuButton>
              </DropdownMenuItem>
              <DropdownMenuItem className="px-1" onClick={() => setTheme("dark")}>
                <SidebarMenuButton>
                  Dark
                </SidebarMenuButton>
              </DropdownMenuItem>
              <DropdownMenuItem className="px-1" onClick={() => setTheme("system")}>
                <SidebarMenuButton>
                  System
                </SidebarMenuButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
