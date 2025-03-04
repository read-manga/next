import { JSX, ReactNode } from "react";
import { Sidebar, SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

interface PropsNavabarRoot {
  children: ReactNode;
  variant?: "sidebar" | "floating" | "inset" | undefined,
  side?: "left" | "right" | undefined,
}

export default function SidebarRoot({ children, variant, side }: PropsNavabarRoot): JSX.Element {
  return (
    <Sidebar variant={variant} className="border-[var(--sidebar-border)]" side={side}>
      {children}
    </Sidebar>
  );
}
