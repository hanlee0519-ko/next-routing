export type HeroItem = {
  id: number;
  name: string;
  slug?: string;
  imgUrl?: string;
};

export const heroList: HeroItem[] = [
  { id: 1, name: "울버린", slug: "wolverine", imgUrl: "/1.png" },
  { id: 2, name: "아이언맨", slug: "ironMan", imgUrl: "/2.png" },
  { id: 3, name: "데드풀", slug: "deadPool", imgUrl: "/3.png" },
  { id: 4, name: "스파이더맨", slug: "spiderMan", imgUrl: "/4.png" },
];

export const getHeroInfo = (hero: string): HeroItem => {
  const heroInfo = heroList.find((item) => hero === item.slug);

  return heroInfo ? heroInfo : { id: 0, name: "", slug: "", imgUrl: "" };
};
