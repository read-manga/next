"use client";

import { ReactElement } from "react";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

interface PropsMenuItem {
  children: ReactElement[] | ReactElement;
  title: string;
}

export default function NavbarMenuItem({ children, title }: PropsMenuItem): ReactElement {
  const routeName = usePathname();

  return (
    <NavigationMenuItem className={title === routeName ? "rounded-lg bg-[var(--sidebar-border)]" : "hover:bg-[var(--sidebar-border)] rounded-md"}>
      {children}
    </NavigationMenuItem>
  );
}
