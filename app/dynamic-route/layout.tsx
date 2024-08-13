import { heroList } from "@/data/marvel-data";
import DynamicNavGroup from "@/ui/dynamic-nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dynamic-Route",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const navItemList = heroList;

  return (
    <div>
      <div>
        <DynamicNavGroup navItemList={navItemList} />
      </div>
      <div>{children}</div>
    </div>
  );
}
