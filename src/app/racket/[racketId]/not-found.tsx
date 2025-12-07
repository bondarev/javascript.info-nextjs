import { NotFound } from '@/components';

export default function RacketNotFound() {
  return (
    <NotFound
      message="Ракетка не найдена"
      description="К сожалению, такой ракетки не существует в нашем каталоге"
      buttonText="← К каталогу"
      buttonHref="/rackets"
    />
  );
}
