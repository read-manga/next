import { JSX } from "react";
import { CarouselContent, CarouselItem } from "../ui/carousel";

export default function BannerCard(): JSX.Element {
  return (
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem className="py-0 pl-4" key={index}>
          <img className="md:max-h-[300px] sm:max-h-[300px] h-full sm:min-h-[300px] max-h-[200px] md:min-h-[300px] rounded-lg flex flex-col items-center justify-between w-full" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ee853ec6-ae19-4364-bb10-fb356da37a35/dfi148q-0b95e548-c337-431c-bdb7-f24eb36b3a13.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VlODUzZWM2LWFlMTktNDM2NC1iYjEwLWZiMzU2ZGEzN2EzNVwvZGZpMTQ4cS0wYjk1ZTU0OC1jMzM3LTQzMWMtYmRiNy1mMjRlYjM2YjNhMTMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7V-Utl2narvBm60P6uwfPwcIJ-IRbwQ0cjuquZrDv_U" alt="banner"/>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}
