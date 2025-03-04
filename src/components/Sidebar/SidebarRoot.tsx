import { JSX, ReactNode } from "react";
import { SidebarHeader, Sidebar, SidebarProvider } from "@/components/ui/sidebar";

interface PropsNavabarRoot {
  children: ReactNode;
}

export default function SidebarRoot({ children }: PropsNavabarRoot): JSX.Element {
  return (
    <SidebarProvider>
      <Sidebar>
        {children}
      </Sidebar>
    </SidebarProvider>
  );
}
