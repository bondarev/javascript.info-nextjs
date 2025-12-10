import { BaseError } from './BaseError';

type ServerErrorProps = {
  onRetry?: () => void;
};

function ServerError({ onRetry }: ServerErrorProps) {
  const button = onRetry
    ? { text: 'Попробовать снова', onRetry }
    : { text: '← На главную', href: '/' };

  return (
    <BaseError
      code="500"
      title="Что-то пошло не так"
      description="Произошла ошибка на сервере. Попробуйте обновить страницу."
      button={button}
    />
  );
}

export { ServerError };
