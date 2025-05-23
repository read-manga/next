import { ReactElement } from "react";
import { NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

interface PropsNavbarItem {
  children: ReactElement,
  label?: string | undefined,
  text?: string,
  icon?: any,
}

export default function NavbarItem({ children, label, text, icon }: PropsNavbarItem): ReactElement {
  return (
    <NavigationMenuContent className="bg-[var(--card)]">
      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        {label && <li className="row-span-3 ">
          <NavigationMenuLink asChild>
            <a
              className="flex h-full w-full select-none flex-col justify-end bg-[var(--sidebar)] rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
              href={`/${label}`}
            >
              {icon}
              <div className="mb-2 mt-4 text-lg font-medium">
                {label}
              </div>
              <p className="text-sm leading-tight text-muted-foreground">
                {text}
              </p>
            </a>
          </NavigationMenuLink>
        </li>}
        { children }
      </ul>
    </NavigationMenuContent>

  );
}
