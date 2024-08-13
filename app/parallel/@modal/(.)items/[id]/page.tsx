"use client";

import { useRouter } from "next/navigation";
import { modalContainer, modalArea, modalBtn } from "@/style/modal.css";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className={modalContainer}>
      <div className={modalArea}>
        <h1>Modal :{id}</h1>
        <button onClick={() => router.back()} className={modalBtn}>
          확인
        </button>
      </div>
    </div>
  );
}
