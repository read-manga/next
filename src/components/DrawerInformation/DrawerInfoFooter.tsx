import { JSX } from "react";
import { DrawerFooter } from "@/components/ui/drawer";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { MessageSquareIcon } from "lucide-react";

export default function DrawerInfoFooter(): JSX.Element {
  return (
    <DrawerFooter>
      <div className="w-full flex items-end justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDsbmMXBPfcINz2k5MOyoEyVGiIEcPGARWQ&s" />
            <AvatarFallback>Proxy</AvatarFallback>
          </Avatar>
          <span className="text-lg font-bold flex items-center gap-2 whitespace-nowrap">
            @Seven Proxy
          </span>
        </div>
        <Button variant="default" className="bg-[var(--sidebar-ring)]" size="sm">
          <MessageSquareIcon className="w-4 h-4" />
          Message
        </Button>
      </div>
      <div className="w-full md:max-h-[500px] md:h-[450px] sm:h-[300px]">
        <img className="w-full h-full rounded-lg" src="https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_2a1p9dt3p13bd0mbhfqg08h067/-S897-FWEBP" alt="manga name" />
      </div>
    </DrawerFooter>
  );
}
