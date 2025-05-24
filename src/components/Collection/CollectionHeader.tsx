import { ReactElement } from "react";

interface PropsCollectionHeader {
  title: string;
  url: string;
  Icon: any;
}

export default function CollectionHeader({ title, url, Icon}: PropsCollectionHeader): ReactElement {
  return (
    <div className="mb-4 flex items-center gap-2">
      <p className="uppercase text-3xl font-bold flex items-center gap-1">
        {Icon}
        {title}
      </p>
      <a className="text-sm text-zinc-500 py-0.5 px-2 rounded-lg bg-[var(--sidebar-accent)]" href={url}>Ver mais...</a>
    </div>
  );
}
