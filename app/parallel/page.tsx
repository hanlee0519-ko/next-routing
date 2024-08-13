import { parallelLink } from "@/style/parallel-page.css";
import Link from "next/link";

export default function ParallelPage() {
  return (
    <main>
      <h1>This, 병렬 라우팅</h1>
      <Link href={"/parallel/items/1"} className={parallelLink}>
        <h3>Open 1번</h3>
      </Link>
      <Link href={"/parallel/items/2"} className={parallelLink}>
        <h3>Open 2번</h3>
      </Link>
    </main>
  );
}
