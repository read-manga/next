'use client';

import { DrawerInformation } from "@/components/DrawerInformation";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SidebarContent, SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import React, { JSX } from "react";

export default function SidebarProfileToContinue(): JSX.Element {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <SidebarContent>
      <SidebarGroup>
        <Carousel 
          opts={{
            align: "start",
          }}
          plugins={[plugin.current]}
          className="w-full max-w-sm"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <SidebarGroupLabel className="w-full flex items-center gap-2 justify-start">
            <span className="text-lg font-bold">
              Continue
            </span>
            <div className="h-full text-center relative flex items-center justify-center gap-2">
              <CarouselPrevious  className="mt-5 relative top-0 left-0 h-5 w-10" />
              <CarouselNext className="mt-5 relative top-0 right-0 h-5 w-10"/>
            </div>
          </SidebarGroupLabel>
          <CarouselContent className="mt-2 -ml-1 max-h-[200px]">
            <CarouselItem className="pl-1 md:basis-2/3 lg:basis-2/3">
              <div className="p-1 h-full">
                <Card className="border-1 bg-[var(--muted)] border-[var(--sidebar-ring)] py-0 h-full shadow-none">
                  <CardHeader className="px-2 py-2">
                    <span className="text-sm font-bold text-[var(--sidebar-ring)]">Manga</span>

                    <p className="text-lg font-bold">Chaindsew man</p>
                  </CardHeader>
                  <CardFooter className="py-2 px-2">
                    <DrawerInformation.Root button={(
                      <Button size="sm" className="text-zinc-400 bg-[var(--sidebar)] decoration-2 transition-all delay-100 duration-500 text-base ">
                        Ver
                      </Button>
                    )}>
                      <DrawerInformation.Head />
                      <DrawerInformation.Footer />
                    </DrawerInformation.Root>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </SidebarGroup>
    </SidebarContent>
  );
}
