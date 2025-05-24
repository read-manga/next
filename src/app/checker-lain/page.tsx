import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import LayoutApp from "@/layout/dash";
import { PlayIcon, StopCircleIcon } from "lucide-react";
import Image from "next/image";
import { ReactElement } from "react";

export default function Chekcer(): ReactElement {
  return (
    <LayoutApp context={{
      name: "Home",
      itemSub: "Checker-Lain"
    }}>
      <Navbar.Root search={false} type="start">
        <div className="w-full">
          <div className=" w-full bg-[var(--foreground)] dark:bg-[var(--sidebar-accent)] text-center px-2 py-0.5 rounded-2xl">
            <p className="pointer-events-none select-none text-white dark:text-white font-bold text-lg uppercase">Checker Lain</p>
          </div>
        </div>
      </Navbar.Root>
      <section className="my-4">
        <Card className="bg-neutral-900 border-[var(--sidebar-accent)] shadow-[0_4px_15px_var(--sidebar-accent)]">
          <CardHeader className="w-full text-center flex flex-col items-center justify-center gap-2">
            <Image className="pointer-events-none select-none rounded-md w-full h-[250px]" src="/lain-banner_card-checker.gif" alt="lain carding" width={500} height={500} />
            <p className="text-3xl font-bold select-none text-purple-500 uppercase">Checker Lain</p>
          </CardHeader>
          <CardContent className="w-full mt-8">
            <div className="mb-4">
              <Button variant="destructive" className="bg-white">
                <PlayIcon className="w-6 h-6 text-white"/>
                Start
              </Button>
              <Button>
                <StopCircleIcon className="w-6 h-6"/>
                Stop
              </Button>
            </div>
            <textarea className="text-xl text-white font-bold placeholder:text-3xl placeholder:text-zinc-700 placeholder:font-bold focus:outline-0 max-h-[100px] min-h-[100px] w-full shadow-[0_4px_10px_var(--sidebar-accent)] rounded-lg py-2 px-2 border-4 border-[var(--sidebar-accent)] bg-[var(--sidebar)" placeholder="Insira lista..."></textarea>
          </CardContent>
        </Card>
      </section>
    </LayoutApp>
  );
}