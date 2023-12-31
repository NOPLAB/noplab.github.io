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

  return (
    <main className="flex flex-col pt-10 items-center">
      <div className="flex flex-col min-h-screen w-full space-y-20 items-center">
        <Avatar
          src="nop_400x400.jpg"
          alt="nop"
          color="gradient"
          bordered
          css={{ size: "$80" }}
        />
        <Text
          h1
          size={65}
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
        <Card variant="bordered" borderWeight="black" css={{ mw: "35rem" }}>
          <Card.Header>
            <Text color="#74a4dd" h2>
              Links
            </Text>
          </Card.Header>
          <Card.Body>
            <Grid.Container justify="center">
              <Grid xs={5} justify="center">
                <Link href="https://twitter.com/NOP_LAB" title="Twitter">
                  <IconBrandTwitter
                    size={80}
                    color={theme === "dark" ? "white" : "black"}
                  />
                </Link>
              </Grid>
              <Grid xs={5} justify="center" title="GitHub">
                <Link href="https://github.com/NOPLAB">
                  <IconBrandGithub
                    size={80}
                    color={theme === "dark" ? "white" : "black"}
                  />
                </Link>
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>

        <Card variant="bordered" borderWeight="black" css={{ mw: "35rem" }}>
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
                  color={theme === "dark" ? "white" : "black"}
                />
              </Grid>
              <Grid xs={5} justify="center">
                <IconBrandRust
                  size={80}
                  color={theme === "dark" ? "white" : "black"}
                />
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </div>
    </main>
  );
}
