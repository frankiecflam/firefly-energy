"use client";
import "./globals.css";
import { useState, useEffect } from "react";

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
      <body className="bg-white dark:bg-black text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
