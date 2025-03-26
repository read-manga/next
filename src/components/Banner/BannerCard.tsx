import { JSX } from "react";
import { CarouselContent, CarouselItem } from "../ui/carousel";

export default function BannerCard(): JSX.Element {
  return (
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <div style={{ backgroundImage: ` url('https://slimeread.com/_next/image?url=https%3A%2F%2Fblack.slimeread.com%2Fusers%2F115%2F1738805845456-PEDIDO_087_1.png&w=2048&q=75')` }} className="md:max-h-[300px] sm:max-h-[300px] h-full sm:min-h-[300px] max-h-[200px] md:min-h-[300px] bg-center bg-cover bg-no-repeat rounded-md p-4 flex flex-col items-start justify-between">
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}
