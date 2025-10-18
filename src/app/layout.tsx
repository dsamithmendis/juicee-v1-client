import type { Metadata } from "next";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Juciee",
  description: "Juciee for all your juicy needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
