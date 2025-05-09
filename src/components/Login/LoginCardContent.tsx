"use client";

import { JSX, useState } from "react";
import { CardContent } from "@/components/ui/card";
import { FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { Eye, EyeClosed, Key, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropsLoginCardContent {
  form: UseFormReturn<{
    email: string;
    password: string;
  }>,
}

export default function LoginCardContent({ form }: PropsLoginCardContent): JSX.Element {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <CardContent>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="grid mb-4 w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email" className="text-lg font-bold mb-2">
              <MailIcon className="h-4 w-4"/>
              Email
            </Label>
            <Input  type="email" id="email" className="border-[var(--sidebar)]" placeholder="Email" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem className="grid mb-4 w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password" className="text-lg font-bold mb-2">
              <Key className="h-4 w-4"/>
              Password
            </Label>
            <div className="flex items-center gap-1">
              <Input  type={isPassword ? "password" : "text"} id="password" className="border-[var(--sidebar)]" placeholder="Password" />
              <Button type="button" className="cursor-pointer p-2 rounded-lg bg-[var(--sidebar)]" onClick={() => setIsPassword(!isPassword)}>
                {isPassword ? <Eye className="h-4 w-4 text-zinc-400"/> : <EyeClosed className="h-4 w-4 text-zinc-400"/>}
              </Button>
            </div>
          </FormItem>
        )}
      />
    </CardContent>
  );
}
