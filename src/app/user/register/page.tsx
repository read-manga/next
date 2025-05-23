import { RegisterComponent } from "@/components/Register";
import LayoutApp from "@/layout/dash";
import { ReactElement } from "react";

export default async function Register(): Promise<ReactElement> {
  return (
    <LayoutApp
      context={{
        name: "User",
        itemSub: "Register",
      }}
    >
      <RegisterComponent.Root>
        <RegisterComponent.Card>
          <>
            <RegisterComponent.Head />
            <RegisterComponent.Content />
            <RegisterComponent.Footer />
          </>
        </RegisterComponent.Card>
      </RegisterComponent.Root>
    </LayoutApp>
  );
}
