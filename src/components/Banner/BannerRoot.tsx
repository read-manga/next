"use client";

import { ReactElement, RefObject, useRef } from "react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import { Carousel } from "@/components/ui/carousel";

interface PropsBannerRoot {
  children: ReactElement;
}

export default function BannerRoot({ children }: PropsBannerRoot): ReactElement {
  const plugin: RefObject<AutoplayType> = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="w-full flex items-center justify-center mt-2 mb-10">
      <Carousel 
        plugins={[plugin.current]}
        className="w-full max-w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        >
        { children }
      </Carousel>
    </section>
  );
}
