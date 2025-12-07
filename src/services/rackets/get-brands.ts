import { apiClient, ApiResponse } from '../api-client';
import { Brand } from '@/types';

function getBrands(): Promise<ApiResponse<Brand[]>> {
  return apiClient.get<Brand[]>('brands');
}

export { getBrands };
