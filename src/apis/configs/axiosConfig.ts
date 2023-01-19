import axios from 'axios'

export const api = axios.create({
  withCredentials: true,
  baseURL: '/',
})

const errorHandler = (error: any) => {
  const statusCode = error.response?.status

  if (statusCode && statusCode !== 401) {
    console.error(error)
  }

  return Promise.reject(error)
};

api.interceptors.response.use(null, (error) => {
  return errorHandler(error)
});
