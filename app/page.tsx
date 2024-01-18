'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import {
  IconBrandCSharp,
  IconBrandCpp,
  IconBrandGithub,
  IconBrandNextjs,
  IconBrandRust,
  IconBrandTwitter,
  IconBrandTypescript,
} from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const { theme } = useTheme();

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center min-h-screen w-full gap-y-20 pt-20">
        <picture>
          <img
            src="nop_400x400.jpg"
            alt="nop image"
            className="rounded-full border-4 border-pink-400 size-80"
          ></img>
        </picture>

        <h1 className="animate-text-focus-in text-6xl font-bold gradient bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
          Hi! Do u like
          <br className="block md:hidden" /> KANI🦀?
        </h1>

        <h2 className="animate-text-focus-in">
          このサイトはNext.jsとNextUIを使用しています。
        </h2>
      </div>

      <div className="flex min-h-screen w-full flex-col gap-y-20 items-center pt-20 mg:pt-0">
        <Card>
          <CardHeader>
            <h1 className="font-bold text-lg">Links</h1>
          </CardHeader>
          <CardBody className="flex flex-row gap-x-20 px-20">
            <Link href="https://twitter.com/NOP_LAB" title="Twitter">
              <IconBrandTwitter size={80} color={isDark ? 'white' : 'black'} />
            </Link>
            <Link href="https://github.com/NOPLAB">
              <IconBrandGithub size={80} color={isDark ? 'white' : 'black'} />
            </Link>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h1 className="font-bold text-lg">Language</h1>
          </CardHeader>
          <CardBody className="flex flex-row gap-x-10 px-20">
            <IconBrandCSharp size={80} color={isDark ? 'white' : 'black'} />
            <IconBrandRust size={80} color={isDark ? 'white' : 'black'} />
            <IconBrandCpp size={80} color={isDark ? 'white' : 'black'} />
            <IconBrandTypescript
              size={80}
              color={isDark ? 'white' : 'black'}
              opacity={0.6}
            />
            <IconBrandNextjs
              size={80}
              color={isDark ? 'white' : 'black'}
              opacity={0.6}
            />
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
