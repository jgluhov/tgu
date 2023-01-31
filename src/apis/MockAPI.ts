import { api } from '@/apis/configs/axiosConfig';

export const MockAPI = {
  get: async <T>(jsonId: string): Promise<T> => {
    return api.request({
      url: `/mocks/${jsonId}.json`,
      method: 'GET'
    }).then(res => res.data);
  },
}
