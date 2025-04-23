"use client";

import LayoutApp from "@/layout/App";
import { JSX } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { MoveRightIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginComponent } from "@/components/Login";

const formSchema = z.object({
  email: z.string().max(20, {
    message: "E-mail deve ser menor que 20 caracteres."
  }).email({
    message: "O campo deve ser preenchido com um E-mail válido."
  }),
  password: z.string().min(6, {
    message: "O password deve ser maior 6 caracteres."
  }).max(18, {
    message: "O password deve ser menor que 18 caracteres."
  })
})

export default function Login(): JSX.Element {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  return (
    <LayoutApp context={{
      name: "User",
      itemSub: "Login"
    }}>
      <LoginComponent.Root form={form} formSchema={formSchema}>
        <LoginComponent.Card>
          <LoginComponent.Head/>
          <LoginComponent.Content form={form}/>
          <LoginComponent.Footer />
        </LoginComponent.Card>
      </LoginComponent.Root>
    </LayoutApp>
  );
}
