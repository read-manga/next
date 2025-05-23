'use client'
import LayoutApp from "@/layout/dash";
import { ReactElement } from "react";
import ChatUser from '@/components/Chat/ChatUser'

export default function ChartUserId(): ReactElement {
  return (
    <LayoutApp context={{
      name: "Chat",
      itemSub: "Privado"
    }}>
      <ChatUser/>
    </LayoutApp>
  );
}
