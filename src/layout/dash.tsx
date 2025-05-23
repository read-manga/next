import { SidebarComponent } from "@/components/Sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { PropsSidebarContext } from "@/types/context";
import { ReactElement } from "react";


/**
 * @property PropsLayoutApp.children: ReactElement
 * Recebe um components para forma o layout principal do App.
 */
interface PropsLayoutApp {
  children: ReactElement[] | ReactElement;
  context: PropsSidebarContext,
}

/**
 * 
 * @param param children
 * @returns ReactElement
 */
export default async function LayoutApp({ children, context }: PropsLayoutApp): Promise<ReactElement> {
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
