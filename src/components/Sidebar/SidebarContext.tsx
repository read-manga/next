import { JSX, ReactNode } from "react";
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, HouseIcon } from "lucide-react";
import { data, PropsItem, PropsListContext, PropsSub } from "@/utils/dateSidebarContext";

export default function SidebarContext(): JSX.Element {
  return (
    <SidebarContent>
      {data.map((context: PropsListContext) => (
        <Collapsible key={context.name} defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel>
              <span className="w-full px-3">{context.name}</span>
            </SidebarGroupLabel>
            {context.sub.map((sub: PropsSub) => (
              <div key={sub.name}>
                <SidebarGroupLabel asChild className="w-full">
                  <CollapsibleTrigger>
                    <SidebarMenuButton>
                      {sub.Icon}
                      {sub.name}
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarMenuSub className="my-1">
                    {sub.items.map((item: PropsItem) => (
                      <a href={item.url} key={item.name}>
                        <SidebarGroupContent>
                          <SidebarMenuButton>
                            {item.name}
                          </SidebarMenuButton>
                        </SidebarGroupContent>
                      </a>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </div>
            ))}
          </SidebarGroup>
        </Collapsible>
      ))}
    </SidebarContent>
  );
}
