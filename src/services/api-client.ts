const BASE_API_URL = 'http://localhost:4000/api/';

type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: { code: number; message: string } };

type QueryParams = Record<string, string | number | boolean | undefined>;

function buildUrl(endpoint: string, params?: QueryParams): string {
  const url = new URL(endpoint, BASE_API_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  return url.toString();
}

const apiClient = {
  async get<T>(
    endpoint: string,
    params?: QueryParams,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> {
    try {
      const url = buildUrl(endpoint, params);
      const response = await fetch(url, options);

      if (!response.ok) {
        return {
          success: false,
          error: {
            code: response.status,
            message: response.statusText || `HTTP Error: ${response.status}`,
          },
        };
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 0,
          message: error instanceof Error ? error.message : 'Unknown error',
        },
      };
    }
  },
};

export { apiClient, type ApiResponse };
