"use client";

import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { Providers } from "./Provider";
import ThemeSwitch from "./ThemeSwitch";
import { Navbar, Text } from "@nextui-org/react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

const inter = Noto_Sans_JP({ subsets: ["latin"], weight: "300" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>nop</title>
      </head>
      <body className={inter.className}>
        <Providers>
          <header className="flex flex-row-reverse space-y-20 items-center px-24 py-10">
            <Navbar isBordered variant={"floating"}>
              <Navbar.Content>
                <Navbar.Link href="/">Profile</Navbar.Link>
                <Navbar.Link href="/blog">Blog</Navbar.Link>
              </Navbar.Content>
              <Navbar.Content>
                <Navbar.Item>
                  <ThemeSwitch />
                </Navbar.Item>
              </Navbar.Content>
            </Navbar>
          </header>
          {children}
          <Analytics />
          <footer className="flex flex-row justify-end items-center">
            <Text size={"$md"} className="p-6">
              Created by <Link href={"https://twitter.com/NOP_LAB"}>nop</Link>
            </Text>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
