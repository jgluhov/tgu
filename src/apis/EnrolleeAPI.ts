import { api } from '@/apis/configs/axiosConfig';
import { IEnrollee } from '@/interfaces/enrollee.interface';

export const EnrolleeAPI = {
  get: async function(enrolleeId: string): Promise<IEnrollee> {
    const enrollee = await api.request({
      url: `/api/v1/enrollee/${enrolleeId}`,
      method: 'GET'
    });

    return enrollee.data;
  }
}
