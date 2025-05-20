'use client'
import LayoutApp from "@/layout/dash";
import { JSX } from "react";
import ChatUser from '../../../../components/Chat/ChatUser'

export default function ChartUserId(): JSX.Element {
  return (
    <LayoutApp context={{
      name: "Chat",
      itemSub: "Privado"
    }}>
      <ChatUser/>
    </LayoutApp>
  );
}
