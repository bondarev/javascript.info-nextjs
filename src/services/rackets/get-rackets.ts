import { apiClient, ApiResponse } from '../api-client';
import { Racket } from '@/types';

type Params = {
  limit?: number;
  page?: number;
  brandName?: string;
};

function getRackets({
  limit = 10,
  page = 1,
  brandName,
}: Params): Promise<ApiResponse<Racket[]>> {
  return apiClient.get<Racket[]>('products', {
    limit,
    page,
    brand: brandName,
  });
}

export { getRackets };
