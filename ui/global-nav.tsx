"use client";

import { type Item, menuList } from "@/data/menu";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import {
  active,
  globalNavContainer,
  inActive,
  logo,
  logoLink,
  navItemArea,
} from "@/style/global-nav.css";

type ItemProps = {
  item: Item;
};

const GlobalNavItem = ({ item: { name, slug } }: ItemProps) => {
  const segment = useSelectedLayoutSegment();
  const isActive = segment === slug;

  return (
    <Link key={slug} href={`/${slug}`} className={isActive ? active : inActive}>
      {name}
    </Link>
  );
};

const GlobalNavGroup = () => {
  return (
    <div className={globalNavContainer}>
      <div className={logo}>
        <Link href="/" className={logoLink}>
          <h2>Home</h2>
        </Link>
      </div>

      <nav>
        {menuList.map((section) => {
          return (
            <div key={section.name}>
              <h3>{section.name}</h3>
              <div className={navItemArea}>
                {section.itemList.map((item) => (
                  <GlobalNavItem key={item.slug} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default GlobalNavGroup;
