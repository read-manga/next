import { ReactElement } from "react";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { SidebarMenuButton, SidebarTrigger } from "@/components/ui/sidebar";
import NavbarSearch from "./NavbarSearch";

interface PropsNavbarRoot {
  children: ReactElement[] | ReactElement;
  type?: "between" | "start";
  search: boolean;
}

export default function NavbarRoot({ children, type, search }: PropsNavbarRoot): ReactElement {
  if (type && type === "start") return (
    <div className="w-full py-4 flex items-center justify-start">
      <SidebarTrigger>
        <SidebarMenuButton></SidebarMenuButton>
      </SidebarTrigger>
      {children}
      {search && <NavbarSearch />}
    </div>
  );

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <SidebarTrigger>
        <SidebarMenuButton></SidebarMenuButton>
      </SidebarTrigger>
      <NavigationMenu>
        <NavigationMenuList>
          {children}
        </NavigationMenuList>
      </NavigationMenu>
      {search && <NavbarSearch />}
    </div>
  );
}
