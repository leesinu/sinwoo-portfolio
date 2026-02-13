import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinwoo Portfolio",
  description: "Game client developer portfolio",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
        {modal}
      </body>
    </html>
  );
}
