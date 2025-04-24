"use client";

import { JSX, useState } from "react";
import { CardContent } from "@/components/ui/card";
import { FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { Eye, EyeClosed, Key, MailIcon, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropsLoginCardContent {
  form: UseFormReturn<{
    email: string;
    nickname: string;
    password: string;
  }>,
}

export default function RegisterCardContent({ form }: PropsLoginCardContent): JSX.Element {
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
            <Input {...form.register("email", {required: true})} type="email" id="email" className="border-[var(--sidebar)]" placeholder="Email" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="nickname"
        render={({ field }) => (
          <FormItem className="grid mb-4 w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nickname" className="text-lg font-bold mb-2">
              <User className="h-4 w-4"/>
              Nickname
            </Label>
            <Input {...form.register("nickname", {required: true})} type="nickname" id="nickname" className="border-[var(--sidebar)]" placeholder="Nickname" />
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
              <Input {...form.register("password", {required: true})} type={isPassword ? "password" : "text"} id="password" className="border-[var(--sidebar)]" placeholder="Password" />
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
