import React, { ReactElement } from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface PropsNavbarList {
  label: string,
  text: string
};

export default function NavbarList({ label, text }: PropsNavbarList): ReactElement {
  return (
    <ListItem title={label}>
      {text}
    </ListItem>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[var(--sidebar-border)] hover:text-accent-foreground focus:bg-[var(--sidebar-border)] focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-[var(--sidebar-ring)]">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
})
ListItem.displayName = "ListItem";
