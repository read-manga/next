import LayoutApp from "@/layout/App";
import { JSX } from "react";

export default function ChartUserId(): JSX.Element {
  return (
    <LayoutApp context={{
      name: "Chat",
      itemSub: "Privado"
    }}>
      chat aqui
    </LayoutApp>
  );
}
