'use client';

import { ServerError } from '@/components';

function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="ru">
      <body>
        <ServerError onRetry={reset} />
      </body>
    </html>
  );
}

export default GlobalError;
