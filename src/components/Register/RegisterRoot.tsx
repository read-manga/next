"use client";

import { JSX, ReactNode, useState, useEffect, useTransition } from "react";
import { submitHandler } from "@/actions/register";
import { useRouter } from "next/navigation";
import AuthLoading from "@/components/Loading/AuthLoading";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageCircleWarningIcon } from "lucide-react";

interface PropsRegisterRoot {
  children: ReactNode;
}

export default function RegisterRoot({
  children,
}: PropsRegisterRoot): JSX.Element {
  /*const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (values: z.infer<typeof formSchema>) => {
    const actionsQuery = await registerAction(values);
  }*/
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [alertMessage, setAlertMessage] = useState<{
    [key: string]: string;
  }>();

  useEffect(() => {
    const isToken = localStorage.getItem("token");
    if (isToken) router.push("/");
  }, []);

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitHandler(formData);

      if (result.status) {
        try {
          const isEmail = formData.get("email");
          const isPassword = formData.get("password");
          router.push(
            `/user/login?email=${encodeURIComponent(String(isEmail))}&password=${encodeURIComponent(String(isPassword))}`,
          );
        } catch {
          router.push(`/user/login`);
        }
      } else {
        if (result.data) setAlertMessage(result.data);
        else setAlertMessage({ email: "Não foi possível validar seus dados." });
        setTimeout(() => {
          setAlertMessage(undefined);
        }, 10000);
      }
    });
  }

  return (
    <section className="w-full h-screen flex items-center justify-center">
      {alertMessage && (
        <div className="w-full flex items-center justify-center absolute top-2 z-50">
          <Alert className="outline-0 border-[var(--sidebar-accent)] bg-[var(--card)]">
            <AlertTitle>
              <MessageCircleWarningIcon className="w-10 h-10 text-white" />
            </AlertTitle>
            <AlertDescription>
              {alertMessage?.email && alertMessage.email}
              <br />
              {alertMessage?.nickname && alertMessage.nickname}
              <br />
              {alertMessage?.password && alertMessage.password}
            </AlertDescription>
          </Alert>
        </div>
      )}
      {isPending && <AuthLoading />}
      {!isPending && (
        <form action={handleSubmit} className="space-y-8">
          {children}
        </form>
      )}
    </section>
  );
}
