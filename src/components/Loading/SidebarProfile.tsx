import Image from "next/image";
import { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { CrownIcon } from "lucide-react";


export default function SidebarProfileLoading(): ReactElement {
  return (
    <div className="w-full h-full px-2 py-2 flex items-center justify-center flex-col gap-2">
      <Image width={500} height={500} src="/lain-no-login.png" alt="lain" className="w-[200px] h-[200px]"/>
      <div className="w-full text-center text-zinc-800 dark:text-zinc-400 font-bold">
        <p className="text-xl text-black dark:text-white">Faça login para ver suas informações</p>
        <p className="text-lg ">ou ter acesso aos serviços.</p>
      </div>
      <Button variant="outline" className="text-base font-bold">
        <CrownIcon className="w-4 h-4"/>
        Ter acesso
      </Button>
    </div>
  );
}
