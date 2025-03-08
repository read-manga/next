import { JSX, ReactNode } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { SidebarMenuButton, SidebarTrigger } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";

interface PropsNavbarRoot {
  children: ReactNode,
}

export default function NavbarRoot({ children }: PropsNavbarRoot): JSX.Element {
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <SidebarTrigger>
        <SidebarMenuButton></SidebarMenuButton>
      </SidebarTrigger>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            {children}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
