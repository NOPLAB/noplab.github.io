'use client';

// import { Avatar } from '@nextui-org/avatar';
import { useTheme } from 'next-themes';

export default function Page() {
  const { theme } = useTheme();

  return (
    <main className="flex flex-col pt-10 items-center">
      <div className="flex flex-col min-h-screen w-full space-y-20 items-center">
        {/* <Avatar src="nop_400x400.jpg" alt="nop" size="lg" isBordered /> */}
        <picture>
          <img
            src="nop_400x400.jpg"
            alt="nop image"
            className="rounded-full border-4 border-green-300"
          ></img>
        </picture>

        <h1 className="animate-text-focus-in text-6xl font-bold gradient bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
          Hi! Do u like KANI🦀?
        </h1>

        <h2 className="animate-text-focus-in">
          このサイトはNext.jsとNextUIを使用しています。
        </h2>
      </div>

      <div className="flex min-h-screen w-full flex-col space-y-20 items-center">
        {/* <Card variant="bordered" borderWeight="black" css={{ mw: "35rem" }}>
          <CardHeader>
            <h2>Links</h2>
          </CardHeader>
          <CardBody>
            <GridContainer justify="center">
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
            </GridContainer>
          </CardBody>
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
        </Card> */}
      </div>
    </main>
  );
}
