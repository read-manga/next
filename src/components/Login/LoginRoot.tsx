import { JSX, ReactNode } from "react";
import { Form, UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface PropsLoginRoot {
  children: ReactNode,
  form: UseFormReturn<{
    email: string;
    password: string;
  }>,
  formSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
  }>,
}


export default function LoginRoot({ children, form, formSchema }: PropsLoginRoot): JSX.Element {

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="w-full h-screen p-4 flex items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          { children }
        </form>
      </Form>
    </section>
  );
}
