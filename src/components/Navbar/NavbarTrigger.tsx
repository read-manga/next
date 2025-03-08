import { NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { JSX } from "react";

interface PropsNavbarTrigger {
  text: string,
  select?: boolean;
}

export default function NavbarTrigger({ text, select }: PropsNavbarTrigger): JSX.Element {
  return (
    <NavigationMenuTrigger>
      <div className={select ? "p-2 rounded-lg bg-[var(--sidebar-border)]" : "p2"}>
        <p className="font-bold text-2xl">{text}</p>
      </div>
    </NavigationMenuTrigger>
  );
}
