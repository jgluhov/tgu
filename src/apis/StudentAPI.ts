import { api } from './configs/axiosConfig';
import { studentResponseMock } from './mocks/student.mock';

export const StudentAPI = {
  get: async function(studentId: string) {
    const response = await api.request({
      url: `/students/${studentId}`,
      method: 'GET'
    }).catch(() => studentResponseMock)

    return response.data;
  }
}
