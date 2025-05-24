import { NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ReactElement } from "react";

interface PropsNavbarTrigger {
  text: string;
}

export default function NavbarTrigger({ text }: PropsNavbarTrigger): ReactElement {
  return (
    <NavigationMenuTrigger>
      <p className="text-xl">{text}</p>
    </NavigationMenuTrigger>
  );
}
