import { NotFoundError } from '@/components';

export default function RacketNotFound() {
  return (
    <NotFoundError
      title="Ракетка не найдена"
      description="К сожалению, такой ракетки не существует в нашем каталоге"
      button={{ text: '← К каталогу', href: '/rackets' }}
    />
  );
}
