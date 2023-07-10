"use client";

import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const lightTheme = createTheme({
    type: "light",
  });

  const darkTheme = createTheme({
    type: "dark",
  });

  return (
    <NextThemesProvider
      defaultTheme="system"
      enableSystem
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}
