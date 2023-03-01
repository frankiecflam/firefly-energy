"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Header from "@/components/header/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function getUserThemePreference() {
  const isDarkModePreferred = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  return isDarkModePreferred ? "dark" : "light";
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const themePreference = getUserThemePreference();

    setTheme(themePreference);
  }, []);

  return (
    <html lang="en" className={theme}>
      <body
        className={`bg-white-100 text-black dark:bg-black-100 dark:text-white ${inter.className}`}
      >
        <Header
          theme={theme}
          onToggleTheme={() =>
            setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
          }
        />
        <main className="ml-auto min-h-screen py-10 px-4 pb-[100px] sm:px-8 lg:w-[calc(100vw-300px)] lg:pb-10">
          {children}
        </main>
      </body>
    </html>
  );
}
