import { JSX, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { MoveRightIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropsLoginCard {
  children: ReactNode,
}

export default function LoginCard({ children }: PropsLoginCard): JSX.Element {
  return (
    <Card className="px-0 py-0 p-4 rounded-lg border-none bg-[var(--sidebar-accent)]">
      {children}
    </Card>
  );
}
