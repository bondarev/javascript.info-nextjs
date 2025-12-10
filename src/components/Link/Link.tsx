'use client';

import NextLink from 'next/link';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof NextLink>;

function Link({ children, ...props }: Props) {
  return (
    <NextLink {...props} prefetch={props.prefetch ?? false}>
      {children}
    </NextLink>
  );
}

export { Link };
