import { BookIcon } from "lucide-react";
import { JSX, ReactNode } from "react";

interface PropsCollectionProps {
  children: ReactNode,
}

export default function CollectionRoot({ children }: PropsCollectionProps): JSX.Element {
  return (
    <section className="w-full my-4 mb-10">
      {children}
    </section>
  );
}
