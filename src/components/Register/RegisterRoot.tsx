import { JSX, ReactNode } from "react";
import { Form, SubmitHandler, UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface PropsRegisterRoot {
  children: ReactNode,
  form: UseFormReturn<{
    email: string;
    nickname: string;
    password: string;
  }>,
  formSchema: z.ZodObject<{
    email: z.ZodString;
    nickname: z.ZodString
    password: z.ZodString;
  }>,
}


export default function RegisterRoot({ children, form, formSchema }: PropsRegisterRoot): JSX.Element {
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values: z.infer<typeof formSchema>) => {
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
