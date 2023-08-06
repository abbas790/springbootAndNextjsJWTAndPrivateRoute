import axios from 'axios';

const axiosInterceptorInstance = axios.create();


// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      config.headers['Authorization'] = 'Bearer '+ token
    }
    return config;
  }
);

export default axiosInterceptorInstance;