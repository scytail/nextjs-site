import { getTitles } from "@/lib/api";
import SidebarClient from "./SidebarClient";

export default async function Sidebar() {
  const titles = await getTitles();
  return (
    <SidebarClient titles={titles} />
  );
}