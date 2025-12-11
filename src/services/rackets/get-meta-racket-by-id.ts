import { apiClient, ApiResponse } from '../api-client';
import { Racket } from '@/types';

type GetRacketByIdResponse = {
  product: Racket;
};

async function getMetaRacketById(id: number): Promise<ApiResponse<Racket>> {
  const response = await apiClient.get<GetRacketByIdResponse>(
    `meta/product/${id}`,
  );

  if (!response.success) {
    return response;
  }

  return {
    success: true,
    data: response.data.product,
  };
}

export { getMetaRacketById };
