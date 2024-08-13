import Link from "next/link";

export default function ParallelRoutePage() {
  return (
    <main>
      <h1>This is Parallel Route Page</h1>
      <Link href={"/parallel/items/1"}>
        <h3>Open 1번</h3>
      </Link>
      <Link href={"/parallel/items/2"}>
        <h3>Open 2번</h3>
      </Link>
    </main>
  );
}
