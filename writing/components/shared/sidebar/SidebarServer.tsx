import { getPublicTitles } from "@/lib/api";
import SidebarClient, { SidebarLinks } from "./SidebarClient";
import { Tables } from "@/app/api/models/database.types";

export default async function Sidebar() {
  const titles: Tables<'titles'>[] = await getPublicTitles();
  const sidebarLinks: SidebarLinks[] = titles.map((t) => ({ id: t.id, displayText: t.title_name, path: t.title_url }));
  return (
    <SidebarClient titles={sidebarLinks} />
  );
}