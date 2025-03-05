import { useState, useRef } from "react";
import { Send, SmilePlus, ImagePlus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import EmojiCategoryList from "./EmojiCategoryList";
import { EmojiCategory } from "../../utils/emojis";

interface MessageInputProps {
  onSendMessage: (message: string, image?: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState<string>("");
  const [isEmojiPanelVisible, setEmojiPanelVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<EmojiCategory | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleEmojiButtonClick = () => {
    setEmojiPanelVisible((prev) => !prev);
  };

  const handleEmojiClick = (emoji: string) => {
    setMessage((prevMessage) => prevMessage + emoji);
  };

  const handleCategoryClick = (category: EmojiCategory) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== "" || selectedImage) {
      onSendMessage(message, selectedImage ?? undefined);
      setMessage("");
      setSelectedImage(null);
    }
  };

  return (
    <div className="w-full">
      {selectedImage && (
        <div className="w-full relative flex items-start justify-start">
          <div className="display absolute rounded-lg bottom-2 w-full max-h-32 max-w-32 overflow-hidden">
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      )}
      {isEmojiPanelVisible && (
        <div className="w-full relative flex items-end justify-end">
          <div className="display absolute rounded-lg bottom-2 w-full max-h-80 max-w-80 overflow-hidden">
            <EmojiCategoryList
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
              onEmojiClick={handleEmojiClick}
            />
          </div>
        </div>  
      )}
      <div className="max-h-25 px-2 py-2 w-full h-full relative bg-[var(--sidebar-accent)] rounded-lg border border-[var(--sidebar-ring)]">
        <div className="flex items-start gap-2 ">
          <div className="cursor-pointer" onClick={handleSendMessage}>
            <Send size={19} />
          </div>
          <Textarea
            ref={textareaRef}
            placeholder="Digite sua mensagem aqui"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onInput={handleInput}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
            maxLength={1500}
            className="w-full max-h-20 h-10 outline-0 flex justify-center text-base text-[var(--sidebar-accent-foreground)]  resize-none overflow-y-scroll scrollbar-thin"
          />

          <button
            className="cursor-pointer outline-0"
            onClick={handleEmojiButtonClick}
          >
            <SmilePlus size={22} />
          </button>

          <button
            className="cursor-pointer outline-0"
            onClick={handleClick}
          >
            <ImagePlus size={22} />
          </button>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
