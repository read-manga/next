import { JSX } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { BookIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DrawerInformation } from "@/components/DrawerInformation";

export default function CollectionCarousel(): JSX.Element {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="p-0 pl-4 py-0 md:basis-1/4 lg:basis-1/5">
            <Card className="py-0 w-full flex flex-col justify-center gap-1 border-0 outline-0">
              <div className="w-full">
                <img className="w-full h-full rounded-md" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1460191392i/29861377.jpg" alt="name" />
              </div>
              <div className="py-1">
                <div className="text-base font-bold select-none pointer-events-none text-zinc-700 dark:text-zinc-400 flex items-center justify-start gap-1 w-fit">
                  <BookIcon className="w-4 h-4" />
                  <span>Mangá</span>
                </div>
                <p className="uppercase text-lg font-bold whitespace-nowrap">Mate o Dragão</p>
                <div className="mt-2 flex items-center gap-1">
                  <a href="/m/name/cap" className="text-sm font-medium py-0.5 px-2 rounded-lg border-1 border-[var(--muted)]">CAP 1</a>
                  <time className="text-sm text-zinc-500" dateTime="2018-07-07T20:00:00">May 7</time>
                </div>
                <div>
                  <DrawerInformation.Root button={<Button className="cursor-pointer border-1 border-[var(--sidebar)] bg-[var(--sidebar-accent)] mt-2" variant="outline" size="sm">Detalhes</Button>}>
                    <DrawerInformation.Head />
                    <DrawerInformation.Footer />
                  </DrawerInformation.Root>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
