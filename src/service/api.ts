import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "",
    timeout: 50000,
    headers: {
      Accept: 'application/json',
    },
})

axiosInstance.interceptors.request.use(async (config) => {
  return config
})

export default axiosInstance
