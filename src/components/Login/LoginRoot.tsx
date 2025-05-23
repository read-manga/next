"use client";

import { ReactElement, useState, useTransition } from "react";
import { submitHandler } from "@/actions/login";
import AuthLoading from "@/components/Loading/AuthLoading";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageCircleWarningIcon } from "lucide-react";

interface PropsLoginRoot {
  children: ReactElement;
}

export default function LoginRoot({ children }: PropsLoginRoot): ReactElement {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [alertMessage, setAlertMessage] = useState<{
    [key: string]: string;
  }>();

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitHandler(formData);
      if (result.status) {
        router.push(`/`);
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
    <section className="w-full h-screen p-4 flex items-center justify-center">
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
