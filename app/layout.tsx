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
        className={`bg-white-100 dark:bg-black-100 text-black dark:text-white ${inter.className}`}
      >
        <Header
          theme={theme}
          onThemeToggle={() =>
            setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
          }
        />
        {children}
      </body>
    </html>
  );
}
