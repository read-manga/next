import { JSX } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function AuthLoading(): JSX.Element {
  return (
    <Card className="w-full md:w-[350px] lg:w-[500px] px-0 py-0 p-4 rounded-lg border-none bg-[var(--sidebar-accent)]">
      <Image
        className="w-full h-full mb-2"
        width={500}
        height={500}
        src="/lain-serial-experiments-lain.gif"
        alt="Lain Loading"
      />
      <p className="w-full text-3xl font-bold text-zinc-200 text-center flex items-center justify-center">
        ✨ Enviado informações...
      </p>
    </Card>
  );
}
