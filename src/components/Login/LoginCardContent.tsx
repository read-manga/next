"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeClosed, Key, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import HCapatcha from "@/components/Captcha/HCaptcha";
import { useSearchParams } from "next/navigation";

/*
interface PropsLoginCardContent {
  form: UseFormReturn<{
    email: string;
    password: string;
  }>,
}*/

export default function LoginCardContent(): ReactElement {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const [isPassword, setIsPassword] = useState(true);

  useEffect(() => {
    const email = searchParams.get("email");
    const password = searchParams.get("password");
    if (email && emailRef.current) emailRef.current.value = email;
    if (password && passwordRef.current) passwordRef.current.value = password;
  }, [searchParams]);

  return (
    <CardContent>
      <div className="grid mb-4 w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email" className="text-lg font-bold mb-2">
          <MailIcon className="h-4 w-4" />
          Email
        </Label>
        <Input
          ref={emailRef}
          name="email"
          type="email"
          id="email"
          className="border-[var(--sidebar)]"
          placeholder="Email"
        />
      </div>

      <div className="grid mb-4 w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password" className="text-lg font-bold mb-2">
          <Key className="h-4 w-4" />
          Password
        </Label>
        <div className="flex items-center gap-1">
          <Input
            ref={passwordRef}
            name="password"
            type={isPassword ? "password" : "text"}
            id="password"
            className="border-[var(--sidebar)]"
            placeholder="Password"
          />
          <Button
            type="button"
            className="cursor-pointer p-2 rounded-lg bg-[var(--sidebar)]"
            onClick={() => setIsPassword(!isPassword)}
          >
            {isPassword ? (
              <Eye className="h-4 w-4 text-zinc-400" />
            ) : (
              <EyeClosed className="h-4 w-4 text-zinc-400" />
            )}
          </Button>
        </div>
      </div>

      <input type="hidden" name="captchaToken" id="captchaToken" />
      <HCapatcha />
    </CardContent>
  );
}
