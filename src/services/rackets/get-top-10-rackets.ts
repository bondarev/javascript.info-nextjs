import { apiClient, ApiResponse } from '../api-client';
import { Racket } from '@/types';

function getTop10Rackets(): Promise<ApiResponse<Racket[]>> {
  return apiClient.get<Racket[]>('/top-10');
}

export { getTop10Rackets };