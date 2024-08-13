import { type HeroItem } from "@/data/marvel-data";
import { navGroupContainer, navItem } from "@/style/dynamic-nav.css";
import Link from "next/link";

type NavItemProps = {
  path: string;
  item: HeroItem;
};

type NavItemListProps = {
  navItemList: HeroItem[];
};

const DynamicNavItem = ({ path, item: { name, slug } }: NavItemProps) => {
  const href = slug ? path + "/" + slug : path;

  return (
    <Link className={navItem} href={href}>
      {name}
    </Link>
  );
};

const DynamicNavGroup = ({ navItemList }: NavItemListProps) => {
  const itemList = [{ id: 0, name: "Dynamic" }, ...navItemList];
  const path = "/dynamic-route";

  return (
    <div className={navGroupContainer}>
      {itemList.map((item) => (
        <DynamicNavItem key={item.id} path={path} item={item} />
      ))}
    </div>
  );
};

export default DynamicNavGroup;
