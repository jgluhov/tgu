import { api } from '@/apis/configs/axiosConfig';
import { MockAPI } from './MockAPI';
import { IPersonalCurriculum } from '@/interfaces/personal-curriculum.interface';

export const CurriculumAPI = {
  get: async function(curriculumId: string): Promise<IPersonalCurriculum> {
    const enrollee = await api.request({
      url: `/curriculum/${curriculumId}`,
      method: 'GET'
    }).catch(() => MockAPI.get<IPersonalCurriculum>('8001000000029A43'))

    return enrollee as IPersonalCurriculum;
  }
}
