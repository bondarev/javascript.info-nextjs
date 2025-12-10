'use client';

import { ServerError } from '@/components';

function Error({ reset }: { reset: () => void }) {
  return <ServerError onRetry={reset} />;
}

export default Error;
