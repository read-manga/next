import { ReactElement } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface PropsDrawerInformationRoot {
  children: ReactElement[] | ReactElement,
  button: any,
}

export default function DrawerInformationRoot({ children, button }: PropsDrawerInformationRoot): ReactElement {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {button}
      </DrawerTrigger> 
      <DrawerContent className="py-0 bg-[var(--background)] border border-[var(--sidebar-border)]">
        <div className="w-full max-h-sw h-full flex items-start justify-around">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
