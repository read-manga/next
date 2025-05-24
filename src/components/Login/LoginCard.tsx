import { ReactElement } from "react";
import { Card } from "@/components/ui/card";

interface PropsLoginCard {
  children: ReactElement;
}

export default function LoginCard({ children }: PropsLoginCard): ReactElement {
  return (
    <Card className="w-full md:w-[350px] lg:w-[500px] px-0 py-0 p-4 rounded-lg border-none bg-[var(--sidebar-accent)]">
      {children}
    </Card>
  );
}
