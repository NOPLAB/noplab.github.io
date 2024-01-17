'use client';

import { Card, CardBody, CardFooter } from '@nextui-org/card';
import Link from 'next/link';

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
          <CardBody>
            <h3>{title}</h3>
          </CardBody>
          <CardFooter>
            <p>
              {date.toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              })}
            </p>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
