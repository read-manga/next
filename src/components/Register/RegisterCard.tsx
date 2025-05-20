import { JSX, ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface PropsLoginCard {
  children: ReactNode,
}

export default function RegisterCard({ children }: PropsLoginCard): JSX.Element {
  return (
    <Card className="w-full md:w-[350px] lg:w-[500px] px-0 py-0 p-4 rounded-lg border-none bg-[var(--sidebar-accent)]">
      {children}
    </Card>
  );
}
