"use client";

import { RegisterComponent } from "@/components/Register";
import LayoutApp from "@/layout/App";
import { zodResolver } from "@hookform/resolvers/zod";
import { JSX } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().max(20, {
    message: "E-mail deve ser menor que 20 caracteres."
  }).email({
    message: "O campo deve ser preenchido com um E-mail válido."
  }),
  nickname: z.string().max(16, {
    message: "Nickname deve ser menor que 16 caracteres."
  }),
  password: z.string().min(6, {
    message: "O password deve ser maior 6 caracteres."
  }).max(18, {
    message: "O password deve ser menor que 18 caracteres."
  })
})

export default function Register(): JSX.Element {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  
  return (
    <LayoutApp context={{
      name: "User",
      itemSub: "Register"
    }}>
      <RegisterComponent.Root form={form} formSchema={formSchema}>
        <RegisterComponent.Card>
          <RegisterComponent.Head />
          <RegisterComponent.Content form={form}/>
          <RegisterComponent.Footer />
        </RegisterComponent.Card>
      </RegisterComponent.Root>
    </LayoutApp>
  );
}
