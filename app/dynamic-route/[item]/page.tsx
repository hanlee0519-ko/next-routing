import { getHeroInfo } from "@/data/marvel-data";
import Image from "next/image";

export default function DynamicItemPage({
  params: { item },
}: {
  params: { item: string };
}) {
  const itemInfo = getHeroInfo(item);

  return (
    <>
      <h1>{itemInfo.name}</h1>
      {itemInfo.imgUrl && (
        <Image src={itemInfo.imgUrl} alt="hero" width={250} height={250} />
      )}
    </>
  );
}
