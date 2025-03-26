"use client";

import { JSX, ReactNode, RefObject, useRef } from "react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import { Carousel } from "@/components/ui/carousel";

interface PropsBannerRoot {
  children: ReactNode,
}

export default function BannerRoot({ children }: PropsBannerRoot): JSX.Element {
  const plugin: RefObject<AutoplayType> = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="w-full flex items-center justify-center my-4">
      <Carousel 
        plugins={[plugin.current]}
        className="w-full md:max-w-3xl sm:max-w-xl max-w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        >
        { children }
      </Carousel>
    </section>
  );
}
