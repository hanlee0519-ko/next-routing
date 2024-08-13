import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parallel-Route",
};

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
