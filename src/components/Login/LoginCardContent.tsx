import { JSX } from "react";
import { CardContent } from "@/components/ui/card";
import { FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface PropsLoginCardContent {
  form: UseFormReturn<{
    email: string;
    password: string;
  }>,
}

export default function LoginCardContent({ form }: PropsLoginCardContent): JSX.Element {
  return (
    <CardContent>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">password</Label>
            <Input type="password" id="password" placeholder="password" />
          </FormItem>
        )}
      />
    </CardContent>
  );
}
