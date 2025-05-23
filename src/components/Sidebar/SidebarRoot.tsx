import { ReactElement } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { axiosServer } from "@/lib/axios-server";
import SidebarProfileLoading from "@/components/Loading/SidebarProfile";

interface PropsNavabarRoot {
  children: ReactElement[] | ReactElement;
  variant?: "sidebar" | "floating" | "inset" | undefined;
  side?: "left" | "right" | undefined;
  token?: string | undefined;
}

async function SidebarRootRight({
  children,
  variant,
  side,
}: PropsNavabarRoot): Promise<ReactElement> {
  return (
    <Sidebar
      variant={variant}
      className="border-[var(--sidebar-border)]"
      side={side}
    >
      {children}
    </Sidebar>
  );
}

export default async function SidebarRoot({
  children,
  variant,
  side,
}: PropsNavabarRoot): Promise<ReactElement> {
  if (side === "left") return <SidebarRootRight children={children} variant={variant} side={side} />
  try {
    const axios = axiosServer();
    const res = await axios.get("/user/me");

    const user = res.data?.data;
    console.log(user)
    return (
      <Sidebar
        variant={variant}
        className="border-[var(--sidebar-border)]"
        side={side}
      >
        {children}
      </Sidebar>
    );
  } catch {
    return (
      <Sidebar
        variant={variant}
        className="border-[var(--sidebar-border)]"
        side={side}
      >
        <SidebarProfileLoading />
      </Sidebar>
    );
  }
}
