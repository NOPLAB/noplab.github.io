"use client";

import { Card, Link } from "@nextui-org/react";

export default function BlogTitle({
  str,
  link,
}: {
  str: string;
  link: string;
}) {
  return (
    <div>
      <Link href={link}>
        <Card isHoverable isPressable>
          <Card.Body>{str}</Card.Body>
        </Card>
      </Link>
    </div>
  );
}
