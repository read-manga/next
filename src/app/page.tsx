import { Navabar } from "@/components/Navbar";
import LayoutApp from "@/layout/App";


export default function Home() {
  return (
    <LayoutApp context={{
      name: "Home",
      itemSub: "App"
    }}>
      <Navabar.Root>
        <Navabar.Trigger text="Anime" />
        <Navabar.Item />
      </Navabar.Root>
    </LayoutApp>
  );
}
