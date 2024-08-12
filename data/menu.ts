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
        name: "라우팅 그룹",
        slug: "route-group",
        description: "URL 경로에 영향을 주지 않고 라우트를 조직",
      },
    ],
  },
];
