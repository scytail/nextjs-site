import { getPublicTitles } from "@/lib/api";
import SidebarClient from "./SidebarClient";

export default async function Sidebar() {
  const titles = await getPublicTitles();
  return (
    <SidebarClient titles={titles} />
  );
}