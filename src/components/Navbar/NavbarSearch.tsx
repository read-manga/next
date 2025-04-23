import { JSX } from "react";
import { SearchIcon } from "lucide-react";

export default function NavbarSearch(): JSX.Element {
  return (
    <div className="sm:max-w-[200px] md:max-w-[300px] w-full hover:bg-[var(--sidebar-accent)] transition-all delay-150 duration-300 flex items-center gap-2 py-1 px-2 bg-[var(--sidebar)] border border-[var(--sidebar-border)] rounded-lg max-h-[80px] h-full">
      <span className="text-zinc-400 font-medium text-base w-full h-full">
        Search manga/anime name...
      </span>
      <SearchIcon className="text-zinc-400 w-10 min-h-full h-full py-1 px-2 bg-[var(--sidebar-accent)] rounded-lg"/>
    </div>
  );
}
