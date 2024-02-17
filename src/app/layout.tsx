import type { Metadata } from "next";
import "@/Sass/AllSass.scss";
import MenuBar from "@/components/MenuBar";
import { MantineProvider } from '@mantine/core';
import BackgroundBubble from "@/components/BackgroundBubble";

export const metadata: Metadata = {
  title: "Arrijuria Eric Portfolio",
  description: "Portfolio next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="App">
        <MenuBar />
        <BackgroundBubble />
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
