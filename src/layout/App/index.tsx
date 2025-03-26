import { SidebarComponent } from "@/components/Sidebar";
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { PropsSidebarContext } from "@/types/context";
import { JSX, ReactNode } from "react";



/**
 * @property PropsLayoutApp.children: ReactNode
 * Recebe um components para forma o layout principal do App.
 */
interface PropsLayoutApp {
  children: ReactNode;
  context: PropsSidebarContext,
}

/**
 * 
 * @param param0 children
 * @returns JSX.Element
 */
export default function LayoutApp({ children, context }: PropsLayoutApp): JSX.Element {
  return (
    <div className="overflow-hidden">
      <SidebarProvider>
        <SidebarComponent.Root variant="floating" side="left">
          <SidebarComponent.Head />
          <SidebarComponent.Context name={context.name} itemSub={context.itemSub} />
          <SidebarComponent.Footer />
        </SidebarComponent.Root>
        <SidebarInset>
          <section className="max-w-[calc(100%-16.1rem)] pr-2">
            {children}
          </section>
        </SidebarInset>
      </SidebarProvider>
      <SidebarProvider className="overflow-hidden min-h-0">
        <SidebarComponent.Root variant="sidebar" side="right">
          <SidebarComponent.Profile.Head />
          <SidebarComponent.Profile.ToContinue />
        </SidebarComponent.Root>
      </SidebarProvider>
    </div>
  );
}
