export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const menuList: { name: string; itemList: Item[] }[] = [
  {
    name: "라우팅 레이아웃",
    itemList: [
      {
        name: "정적 라우팅",
        slug: "route",
        description: "파일 시스템 기반 라우팅",
      },
      {
        name: "동적 라우팅",
        slug: "dynamic-route",
        description: "동적으로 생성되는 라우팅",
      },
      {
        name: "병렬 라우팅",
        slug: "parallel",
        description:
          "동시에 여러 페이지를 하나의 레이아웃 안에서 독립적으로 렌더링, 관리하는 기술을 말함",
      },
    ],
  },
];
