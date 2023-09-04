"use client";

import { useTheme as useNextTheme, useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useNextTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-row space-x-2 items-center">
      <label>
        {theme === "dark" ? (
          <IconMoon color="white" />
        ) : (
          <IconSun color="black" />
        )}
      </label>

      <Switch
        checked={theme === "dark" ? true : false}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </div>
  );
}
