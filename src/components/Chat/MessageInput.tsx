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
    <div className="relative w-[150px] mb-3 ml-9 flex flex-col">
      {selectedImage && (
        <div className="absolute display flex justify-center items-center rounded-lg bottom-10 left-0 w-full h-35 mb-2 bg-[var(--sidebar-accent)]">
          <img
            src={selectedImage}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>
      )}

      <Textarea
        ref={textareaRef}
        placeholder="Digite sua mensagem aqui"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onInput={handleInput}
        onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
        maxLength={1500}
        className="w-200 h-auto max-h-25 outline-0 bg-[var(--sidebar-accent)] flex justify-center border border-[var(--sidebar-ring)] rounded-lg text-xs pl-10 pt-3 pr-22 text-[var(--sidebar-accent-foreground)] resize-none overflow-auto"
      />

      <div className="absolute right-30 top-1/2 -translate-y-1/2 cursor-pointer" onClick={handleSendMessage}>
        <Send size={19} />
      </div>

      <button
        className="absolute left-190 top-1/2 -translate-y-1/2 cursor-pointer outline-0"
        onClick={handleEmojiButtonClick}
      >
        <SmilePlus size={22} />
      </button>

      <button
        className="absolute left-180 top-1/2 -translate-y-1/2 cursor-pointer outline-0"
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

      {isEmojiPanelVisible && (
        <EmojiCategoryList
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
          onEmojiClick={handleEmojiClick}
        />
      )}
    </div>
  );
};

export default MessageInput;
