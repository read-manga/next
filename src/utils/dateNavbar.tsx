import { PlayIcon } from "lucide-react";

export interface PropsNavbar {
  title: string;
  label?: string;
  description?: string;
  icon?: any;
  list: Array<PropsNavbarList>;
};

export interface PropsNavbarList {
  label: string;
  text: string;
  url: string;
};

export const data: Array<PropsNavbar> = [
  {
    title: "/Animes",
    label: "Anime",
    description: "Veja animes gratuítos sem anúncios! :D",
    icon: (<PlayIcon className="h-6 w-6"/>),
    list: [
      {
        label: "Lançamentos",
        text: "Veja os Animes lançados agora :D",
        url: "/animes#news"
      },
      {
        label: "Mais Vistos",
        text: "Veja os animes mais vistos.",
        url: "/animes#views"
      },
      {
        label: "Popular",
        text: "Veja os animes mais populares.",
        url: "/animes#views"
      },
    ]
  },
  {
    title: "/Mangas",
    label: "Mangá",
    description: "Veja mangas gratuítos sem anúncios! :D",
    icon: (<PlayIcon className="h-6 w-6"/>),
    list: [
      {
        label: "Lançamentos",
        text: "Veja os mangas lançados agora :D",
        url: "/mangas#news"
      },
      {
        label: "Mais Vistos",
        text: "Veja os mangas mais vistos.",
        url: "/mangas#views"
      },
      {
        label: "Popular",
        text: "Veja os mangas mais populares.",
        url: "/mangas#views"
      },
    ]
  },
];
