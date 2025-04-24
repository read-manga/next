import { JSX } from "react";
import { CardHeader } from "../ui/card";
import { UserIcon } from "lucide-react";

export default function RegisterCardHead(): JSX.Element {
  return (
    <CardHeader>
      <div className="flex flex-col items-center gap-4 text-3xl text-zinc-300 text-center font-bold uppercase">
        <UserIcon className="w-10 h-10" />
        <p>Register User</p>
      </div>
    </CardHeader>
  );
}
