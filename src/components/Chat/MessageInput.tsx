import { JSX } from "react";
import { useRef, useState } from "react";
import { Send } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

export default function MessageInput({ onSendMessage }: MessageInputProps): JSX.Element {
  const [message, setMessage] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (message.trim() !== "") {
        onSendMessage(message);
        setMessage("");
      }
    }
  };

  return (
    <div className="relative w-[150px] mb-3 ml-9">
      <Textarea
        ref={textareaRef}
        placeholder="Digite sua mensagem aqui"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className="w-170 h-auto max-h-25 outline-0 bg-[var(--sidebar-accent)] flex justify-center border border-[var(--sidebar-ring)] rounded-lg text-xs pl-10 pt-3 text-[var(--sidebar-accent-foreground)] resize-none overflow-hidden"
      />
      <div className="absolute right-30 top-1/2 -translate-y-1/2">
        <Send size={19} />
      </div>
    </div>
  );
}
