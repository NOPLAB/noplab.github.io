'use client';

import { useTheme as useNextTheme } from 'next-themes';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Switch } from '@nextui-org/switch';

export default function ThemeSwitch() {
  const { theme, setTheme } = useNextTheme();

  const [mounted, setMounted] = useState(false);
  const [isSelected, setIsSelected] = useState(true);

  useEffect(() => {
    setMounted(true);
    setIsSelected(theme === 'dark');
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-row gap-x-2 items-center">
      <Switch
        color="warning"
        isSelected={isSelected}
        onValueChange={setIsSelected}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        startContent={<IconMoon color="white" />}
        endContent={<IconSun color="black" />}
      ></Switch>
    </div>
  );
}
