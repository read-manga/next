import { SidebarComponent } from "@/components/Sidebar";
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { JSX, ReactNode } from "react";

/**
 * @property PropsLayoutApp.children: ReactNode
 * Recebe um components para forma o layout principal do App.
 */
interface PropsLayoutApp {
  children: ReactNode;
}

/**
 * 
 * @param param0 children
 * @returns JSX.Element
 */
export default function LayoutApp({ children }: PropsLayoutApp): JSX.Element {
  return (
    <div>
      <SidebarProvider>
        <SidebarComponent.Root variant="floating" side="left">
          <SidebarComponent.Head />
          <SidebarComponent.Context />
          <SidebarComponent.Footer />
        </SidebarComponent.Root>
        <SidebarInset>
          <main>
            {children}
            <SidebarComponent.Root variant="sidebar" side="right">
              a
            </SidebarComponent.Root>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
