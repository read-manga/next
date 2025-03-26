import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import LayoutApp from "@/layout/App";
import { data, PropsNavbar, PropsNavbarList } from "@/utils/dateNavbar";


export default function Home() {
  return (
    <LayoutApp context={{
      name: "Home",
      itemSub: "App"
    }}>
      <Navbar.Root>
        {data.map((index: PropsNavbar) => (
          <Navbar.Menu title={index.title.toLocaleLowerCase() === "/mangas" ? "/" : `${index.title.toLocaleLowerCase()}`} key={index.title}>
            <Navbar.Trigger text={index.title} />
            <Navbar.Item label={index.label} text={index.description} icon={index.icon}>
              {index.list.map((l: PropsNavbarList) => (
                <Navbar.List key={index.label} label={l.label} text={l.text}/>
              ))}
            </Navbar.Item>
          </Navbar.Menu>
        ))}
      </Navbar.Root>
      <Banner.Root>
        <Banner.Card />
      </Banner.Root>
    </LayoutApp>
  );
}
