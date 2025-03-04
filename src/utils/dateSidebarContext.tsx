import { HouseIcon } from "lucide-react";

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
            url: "/"
          }
        ]
      }
    ]
  },
];
