import { HouseIcon, MessageSquareMoreIcon } from "lucide-react";

export interface PropsItem {
  name: string,
  url: string,
};

export interface PropsSub {
  name: string,
  Icon: any,
  items: Array<PropsItem>,
}

export interface PropsListContext {
  name: string,
  sub: Array<PropsSub>,
}

export const data: Array<PropsListContext> = [
  {
    name: "Menu",
    sub: [
      {
        name: "Home",
        Icon: (<HouseIcon />),
        items: [
          {
            name: "App",
            url: "/",
          },
          {
            name: "Termos de Uso",
            url: "/",
          },
        ]
      },
      {
        name: "Chat",
        Icon: (<MessageSquareMoreIcon />),
        items: [
          {
            name: "Privado",
            url: "/chat/user/:id",
          },
        ]
      },
    ]
  },
];
