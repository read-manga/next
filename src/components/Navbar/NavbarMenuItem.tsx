"use client";

import { JSX, ReactNode } from "react";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

interface PropsMenuItem {
  children: ReactNode,
  title: string,
}

export default function NavbarMenuItem({ children, title }: PropsMenuItem): JSX.Element {
  const routeName = usePathname();

  return (
    <NavigationMenuItem className={title === routeName ? "rounded-lg bg-[var(--sidebar-border)]" : "hover:bg-[var(--sidebar-border)] rounded-md"}>
      {children}
    </NavigationMenuItem>
  );
}
