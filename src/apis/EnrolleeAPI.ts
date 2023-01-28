import { api } from '@/apis/configs/axiosConfig';
import { IEnrollee } from '@/interfaces/enrollee.interface';


export const EnrolleeAPI = {
  _getMock: async function(enrolleeId: string): Promise<IEnrollee> {
    return api.request({
      url: `/mocks/${enrolleeId}.json`,
      method: 'GET'
    }).then(res => res.data);
  },
  get: async function(enrolleeId: string): Promise<IEnrollee> {
    const enrollee = await api.request({
      url: `/enrollee/${enrolleeId}`,
      method: 'GET'
    }).catch(() => this._getMock(enrolleeId))

    return enrollee as IEnrollee;
  }
}
