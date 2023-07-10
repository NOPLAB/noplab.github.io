"use client";

import { useTheme } from "next-themes";
import { Avatar, Card, Grid, Link, Spacer, Text } from "@nextui-org/react";
import {
  IconBrandCSharp,
  IconBrandGithub,
  IconBrandRust,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Page() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themesとNextjs 13を組み合わせると起こるバグ対策 2023.07.09
  useEffect(() => setMounted(true), []);

  return (
    <main className="flex flex-col pt-10 items-center">
      <div className="flex min-h-screen flex-col space-y-20 items-center">
        <Avatar
          src="nop_400x400.jpg"
          color="gradient"
          bordered
          css={{ size: "$80" }}
        />
        <Text
          h1
          css={{
            textGradient: "45deg, $pink600 0%, $red600 100%",
          }}
          className="animate-text-focus-in"
        >
          Hi! Do you like KANI🦀?
        </Text>

        <Text size="$lg">
          このサイトはNextJSとNextUIを使用して制作されています。
        </Text>
      </div>

      <div className="flex min-h-screen w-full flex-col space-y-20 items-center">
        <Card variant="bordered" borderWeight="black" css={{ mw: "30rem" }}>
          <Card.Header>
            <Text color="#74a4dd" h2>
              Links
            </Text>
          </Card.Header>
          <Card.Body>
            <Grid.Container justify="center">
              <Grid xs={5} justify="center">
                <Link href="https://twitter.com/NOP_LAB">
                  <IconBrandTwitter
                    size={80}
                    color={mounted && theme === "dark" ? "white" : "black"}
                  />
                </Link>
              </Grid>
              <Grid xs={5} justify="center">
                <Link href="https://github.com/NOPLAB">
                  <IconBrandGithub
                    size={80}
                    color={mounted && theme === "dark" ? "white" : "black"}
                  />
                </Link>
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>

        <Card variant="bordered" borderWeight="black" css={{ mw: "30rem" }}>
          <Card.Header>
            <Text color="#74a4dd" h2>
              Language
            </Text>
          </Card.Header>
          <Card.Body>
            <Grid.Container justify="center">
              <Grid xs={5} justify="center">
                <IconBrandCSharp
                  size={80}
                  color={mounted && theme === "dark" ? "white" : "black"}
                />
              </Grid>
              <Grid xs={5} justify="center">
                <IconBrandRust
                  size={80}
                  color={mounted && theme === "dark" ? "white" : "black"}
                />
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </div>
    </main>
  );
}
