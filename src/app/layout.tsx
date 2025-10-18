import type { Metadata } from "next";
import "@/styles/global.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Container from "@/components/ui/container";

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
      <body className="bg-gradient-to-b from-[#fff7ee] to-[#fcdcc9] min-h-screen">
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
