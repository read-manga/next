import { ChevronDown, ChevronRight } from 'lucide-react';
import emojis, { EmojiCategory } from '../../utils/emojis';
import { getCategoryIcon } from '../../utils/emojiutils';

interface EmojiCategoryListProps {
  activeCategory: EmojiCategory | null;
  onCategoryClick: (category: EmojiCategory) => void;
  onEmojiClick: (emoji: string) => void;
}

const EmojiCategoryList: React.FC<EmojiCategoryListProps> = ({ activeCategory, onCategoryClick, onEmojiClick }) => {
  return (
    <div className="absolute left-120 bottom-[50px] mb-2 w-80 p-2 bg-neutral-800 rounded-md max-h-[300px] overflow-y-auto">
      {Object.keys(emojis).map((category: string) => {
        const emojiCategory = category as EmojiCategory;
        return (
          <div key={emojiCategory} className="category-item mb-4">
            <button
              className="category-button flex items-center text-xs font-semibold py-2 px-3 text-white rounded-md w-full"
              onClick={() => onCategoryClick(emojiCategory)}
            >
              {getCategoryIcon(emojiCategory)}
              {emojiCategory}
              {activeCategory === emojiCategory ? (
                <ChevronDown size={16} className="ml-2" />
              ) : (
                <ChevronRight size={16} className="ml-2" />
              )}
            </button>
            {activeCategory === emojiCategory && (
              <div className="emoji-list mt-2 grid grid-cols-5 gap-2">
                {emojis[emojiCategory].map((emoji, index) => (
                  <button
                    key={index}
                    onClick={() => onEmojiClick(emoji.name)}
                    className="emoji-button text-lg"
                    aria-label={emoji.label}
                  >
                    {emoji.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default EmojiCategoryList;
