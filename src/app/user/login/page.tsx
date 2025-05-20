import LayoutApp from "@/layout/dash";
import { JSX } from "react";
import { LoginComponent } from "@/components/Login";

export default async function Login(): Promise<JSX.Element> {
  return (
    <LayoutApp
      context={{
        name: "User",
        itemSub: "Login",
      }}
    >
      <LoginComponent.Root>
        <LoginComponent.Card>
          <LoginComponent.Head />
          <LoginComponent.Content />
          <LoginComponent.Footer />
        </LoginComponent.Card>
      </LoginComponent.Root>
    </LayoutApp>
  );
}
