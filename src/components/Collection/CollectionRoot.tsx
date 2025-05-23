import { ReactElement } from "react";

interface PropsCollectionProps {
  children: ReactElement[] | ReactElement,
}

export default function CollectionRoot({ children }: PropsCollectionProps): ReactElement {
  return (
    <section className="w-full my-4 mb-10">
      {children}
    </section>
  );
}
