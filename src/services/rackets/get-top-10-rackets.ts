import { apiClient, ApiResponse } from '../api-client';
import { Racket } from '@/types';
import { CACHE_TAGS } from '@/lib/constants';

function getTop10Rackets(): Promise<ApiResponse<Racket[]>> {
  return apiClient.get<Racket[]>('top-10', undefined, {
    next: {
      tags: [CACHE_TAGS.TOP_10_RACKETS],
    },
  });
}

export { getTop10Rackets };
