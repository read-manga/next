import { JSX, ReactNode } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

interface PropsDrawerInformationRoot {
  children: ReactNode,
}

export default function DrawerInformationRoot({ children }: PropsDrawerInformationRoot): JSX.Element {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        { children }
      </DrawerTrigger> 
      <DrawerContent className="py-0 bg-[var(--background)] border border-[var(--sidebar-border)]">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>
              <h2 className="text-3xl font-bold">Chainsew Man</h2>
            </DrawerTitle>
            <DrawerDescription>
              <p className="text-zinc-800 text-base dark:text-zinc-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem consectetur nostrum voluptatem porro omnis, a aliquam quod eligendi accusamus repellendus magni saepe ea laudantium placeat impedit? Quibusdam eum atque provident.</p>
            </DrawerDescription>
          </DrawerHeader>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
