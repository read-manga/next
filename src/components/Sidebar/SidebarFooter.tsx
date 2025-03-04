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
              <SidebarMenuButton>
                <Toggles.Mode /> Theme
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-none" align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <SidebarMenuButton>
                  Light
                </SidebarMenuButton>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <SidebarMenuButton>
                  Dark
                </SidebarMenuButton>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
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
