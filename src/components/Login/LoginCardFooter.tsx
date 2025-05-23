import { ReactElement } from "react";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";

export default function LoginCardFooter(): ReactElement {
  return (
    <CardFooter>
      <div className="w-full flex items-center gap-2 justify-between">
        <a href="/user/register" className="text-sm font-bold text-zinc-600">
          <p className="underline">Não tem conta?</p>
        </a>
        <Button type="submit" variant="outline" size="sm" className="cursor-pointer text-base font-bold py-1 px-2 border-0 bg-[var(--sidebar)] text-zinc-500">
          Login
          <MoveRightIcon />
        </Button>
      </div>
    </CardFooter>
  );
}
