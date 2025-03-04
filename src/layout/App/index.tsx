import { SidebarComponent } from "@/components/Sidebar";
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
      <SidebarComponent.Root>
        <SidebarComponent.Head />
        <SidebarComponent.Context />
        <SidebarComponent.Footer />
      </SidebarComponent.Root>
      {children}
    </div>
  );
}
