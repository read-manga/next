import { useState } from "react";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";

const Chat = () => {
  const [messages, setMessages] = useState<any[]>([]);

  const currentUser = {
    name: "Usuário",
    avatar: "https://images-ext-1.discordapp.net/external/fnh5bLmA8n7CQBmnwSIyDGO5rasn7E1MIXQ14dzJxVU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1193791291125940309/10d7644108adde1987181b1edd110e84.png?format=webp&quality=lossless&width=650&height=650"
  };

  const handleSendMessage = (text: string, image?: string) => {
    if (text.trim() === "" && !image) return;

    const newMessage = {
      text,
      image,
      user: currentUser,
      timestamp: new Date()
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="h-[100vh] flex flex-col">
      <ChatList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;

