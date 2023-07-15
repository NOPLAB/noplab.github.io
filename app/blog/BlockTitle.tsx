"use client";

import { Card, Link, Text } from "@nextui-org/react";

export default function BlogTitle({
  title,
  date,
  link,
}: {
  title: string;
  date: Date;
  link: string;
}) {
  return (
    <div>
      <Link className="min-w-full" href={link}>
        <Card isHoverable isPressable>
          <Card.Body>
            <Text h3>{title}</Text>
          </Card.Body>
          <Card.Footer>
            <Text>
              {date.toLocaleDateString("en-us", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </Text>
          </Card.Footer>
        </Card>
      </Link>
    </div>
  );
}
