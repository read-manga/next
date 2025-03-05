import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";

interface Message {
  text: string;
  image?: string;
  timestamp: Date;
  user: { name: string; avatar: string };
}

interface ChatListProps {
  messages: Message[];
}

const ChatList: React.FC<ChatListProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="p-2 overflow-y-auto h-[calc(100vh-70px)] flex flex-col">
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          user={msg.user}
          message={msg.text}
          timestamp={msg.timestamp}
          image={msg.image} 
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatList;
