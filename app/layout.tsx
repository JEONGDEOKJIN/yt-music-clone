import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProviders"; // shadcn 다크 모드
import { sleep } from "@/lib/utils";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DJ Music",
  description: "DJ Music",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 사용자에게 빠르게 첫 화면(TTV) 을 보여줘야 하므로, RootLayout 에서는 sleep 하지 않는다.
  // // '서버에 갔다 오는 시간' 을 이렇게 테스트 해볼 수도? | 비동기 처리를 이렇게 해볼수도?
  // await sleep(2000) // 2초 대기(비동기 처리) 후 동기 처리(아래 코드 실행)

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider // shadcn 다크 모드
          attribute="class"
          defaultTheme="dark" // dark 입력 하면, 다크모드
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>{children}</Sidebar>
        </ThemeProvider>
      </body>
    </html>
  );
}
