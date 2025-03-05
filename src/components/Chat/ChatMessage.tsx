import { useState } from "react";
import { format, isToday, isYesterday } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ChatMessageProps {
  user: { name: string; avatar: string };
  message: string;
  timestamp: Date;
  image?: string;
}

const formatDate = (date: Date) => {
  if (isToday(date)) return "Hoje";
  if (isYesterday(date)) return "Ontem";
  return format(date, "dd/MM/yyyy", { locale: ptBR });
};

const ChatMessage: React.FC<ChatMessageProps> = ({ user, message, timestamp, image }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const formattedDate = `${formatDate(timestamp)} às ${format(timestamp, "HH:mm:ss")}`;

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setImageLoaded(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="w-full p-2 mb-1 transition-all delay-100 duration-700 rounded-2xl hover:bg-[var(--sidebar-accent)] flex items-start gap-2">
      <img src={user.avatar} className="rounded-full w-10 h-10" alt="Avatar" />
      <div className="flex flex-col max-w-full">
        <strong className="block">
          {user.name} <span className="text-xs font-medium text-neutral-500">{formattedDate}</span>
        </strong>
        <div className="relative">
          {message && (
            <p className="whitespace-pre-wrap break-words w-full text-sm p-2 min-h-[40px]">
              {message}
            </p>
          )}
          
          {image && !message && (
            <img
              src={image}
              alt="Message Image"
              className="w-80 h-60 object-cover rounded-lg cursor-pointer"
              onClick={openImageModal}
            />
          )}
          
          {image && message && (
            <div className="mt-2">
              <img
                src={image}
                alt="Message Image"
                className="w-80 h-60 object-cover rounded-lg cursor-pointer"
                onClick={openImageModal}
              />
            </div>
          )}
        </div>
      </div>

      {isImageModalOpen && image && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black bg-opacity-70 transition-opacity duration-500 ease-in-out"
          onClick={closeImageModal}
        >
          <img
            src={image}
            alt="Imagem Original"
            className={`w-255 h-255 object-contain transform transition-transform duration-500 ease-in-out ${
              imageLoaded ? "scale-100" : "scale-0"
            }`}
            onLoad={handleImageLoad}
          />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
