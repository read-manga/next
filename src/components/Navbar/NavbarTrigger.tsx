import { NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { JSX } from "react";

interface PropsNavbarTrigger {
  text: string,
}

export default function NavbarTrigger({ text }: PropsNavbarTrigger): JSX.Element {
  return (
    <NavigationMenuTrigger>
      <p className="text-xl">{text}</p>
    </NavigationMenuTrigger>
  );
}
