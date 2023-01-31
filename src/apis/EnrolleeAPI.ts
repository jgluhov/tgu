import { api } from '@/apis/configs/axiosConfig';
import { IEnrollee } from '@/interfaces/enrollee.interface';
import { MockAPI } from './MockAPI';

export const EnrolleeAPI = {
  get: async function(enrolleeId: string): Promise<IEnrollee> {
    const enrollee = await api.request({
      url: `/enrollee/${enrolleeId}`,
      method: 'GET'
    }).catch(() => MockAPI.get<IEnrollee>(enrolleeId))

    return enrollee as IEnrollee;
  }
}
