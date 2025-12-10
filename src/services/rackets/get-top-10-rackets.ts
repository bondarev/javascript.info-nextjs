import { apiClient, ApiResponse } from '../api-client';
import { Racket } from '@/types';

function getTop10Rackets(): Promise<ApiResponse<Racket[]>> {
  return apiClient.get<Racket[]>('top-10', undefined, {
    next: {
      tags: ['getTop10Rackets'],
    },
  });
}

export { getTop10Rackets };
