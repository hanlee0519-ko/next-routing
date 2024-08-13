"use client";
import { useRouter } from "next/navigation";

export default function Page(props: { params: { id: string } }) {
  const router = useRouter();
  const { id } = props.params;

  return (
    <div>
      <div>modal</div>
      <div>{id}</div>

      <button onClick={() => router.back()}>확인</button>
    </div>
  );
}
