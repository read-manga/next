import { JSX } from "react";
import { useState, useRef, useEffect } from "react";
import MessageInput from "./MessageInput";

const User = {
  id: "1",
  name: "Proxy",
  avatar: "https://images-ext-1.discordapp.net/external/fnh5bLmA8n7CQBmnwSIyDGO5rasn7E1MIXQ14dzJxVU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1193791291125940309/10d7644108adde1987181b1edd110e84.png?format=webp&quality=lossless&width=50&height=50"
};

export default function ChatUser(): JSX.Element {
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = (newMessage: string) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="h-[100vh] flex flex-col-reverse">
    <MessageInput onSendMessage={handleSendMessage} />
    <div className="p-1 overflow-y-auto h-[calc(100vh-70px)]">
        {messages.map((msg, index) => (
        <div key={index} className="w-180 p-2 mb-0 rounded-lg flex items-center gap-2 overflow-hidden focus-visible:">
            <img src={User.avatar} className="rounded-full w-10 h-10" />
            <div className="flex flex-col">
            <strong className="block">{User.name}</strong>
            <h1 className="whitespace-pre-wrap break-words w-full max-w-[60%]">{msg}</h1>
            </div>
        </div>
        ))}
        <div ref={messagesEndRef}></div>
    </div>
    </div>
  );
}
