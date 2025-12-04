import { rackets } from '@/data/mocks';
import { Brand, Racket } from '@/types';

async function getRackets(): Promise<Racket[]> {
  return [...rackets];
}

async function getTop10Rackets(): Promise<Racket[]> {
  const allRackets = await getRackets();

  return allRackets.filter((r) => r.top10);
}

async function getRacketById(id: number): Promise<Racket | null> {
  const allRackets = await getRackets();

  return allRackets.find((r) => r.id === id) || null;
}

async function getBrands(): Promise<Brand[]> {
  const brandsMap = new Map(rackets.map((r) => [r.brandId, r.brand]));

  return [...brandsMap.values()];
}

export { getRackets, getTop10Rackets, getRacketById, getBrands };
