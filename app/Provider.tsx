"use client";

import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const lightTheme = createTheme({
    type: "light",
    theme: {
      colors: {
        code: "none",
        codeLight: "none",
      },
    },
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {
        background: "#1d1d1d",
        code: "none",
        codeLight: "none",
      },
    },
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
