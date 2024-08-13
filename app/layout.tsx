import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalNavGroup from "@/ui/global-nav";
import { appContainer, contentArea, main, nav } from "@/style/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={appContainer}>
          <div className={contentArea}>
            <div className={nav}>
              <GlobalNavGroup />
            </div>
            <div className={main}>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
