import { JSX } from "react";
import { DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { BookIcon, EyeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DrawerInfoHead(): JSX.Element {
  return (
    <DrawerHeader className="w-full flex flex-col md:min-h-[500px] sm:min-h-[300px] max-h-[500px] items-start justify-between md:w-full md:min-w-[50%] md:max-w-[60%]">
      <div className="h-full">
        <div className="text-xl font-bold select-none pointer-events-none text-zinc-700 dark:text-zinc-400 flex items-center justify-start gap-2 w-fit">
          <BookIcon className="w-6 h-6" />
          <span>Manga</span>
        </div>
        <div className="flex items-center gap-1 my-2">
          <Button size="sm" variant="outline" className="text-yellow-300 px-6 py-1">Free</Button>
        </div>
        <DrawerTitle className="mt-4">
          <h2 className="text-4xl font-bold">Chainsew Man</h2>
        </DrawerTitle>
        <DrawerDescription className="md:max-w-[80%] sm:max-w-[90%] w-full">
          <p className="text-zinc-800 text-xl dark:text-zinc-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem consectetur nostrum voluptatem porro omnis, a aliquam quod eligendi accusamus repellendus magni saepe ea laudantium placeat impedit? Quibusdam eum atque provident.</p>
        </DrawerDescription>
        <ul className="flex items-center mt-4 justify-start gap-2">
          {Array.from({ length: 5 }).map((_, index: number) => (
            <li key={index}>
              <span className="rounded-lg bg-[var(--sidebar-border)] px-4 py-1 border border-[var(--sidebar-ring)] text-sm select-none pointer-events-none">Ação</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Button className="text-red-400 font-bold " variant="outline" size="lg">
          <EyeIcon className="w-10 h-10" />
          Ler
        </Button>
      </div>
    </DrawerHeader>
  );
}
