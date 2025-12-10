import { BaseError } from './BaseError';

type NotFoundErrorProps = {
  title?: string;
  description?: string;
  button?: { text: string; href: string } | null;
};

function NotFoundError({
  title = 'Страница не найдена',
  description = 'К сожалению, запрашиваемая страница не существует',
  button = { text: '← На главную', href: '/' },
}: NotFoundErrorProps) {
  return (
    <BaseError
      code="404"
      title={title}
      description={description}
      button={button}
    />
  );
}

export { NotFoundError };
