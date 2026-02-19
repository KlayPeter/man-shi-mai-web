import api from '@/lib/request';

interface LoginResponse {
  token: string;
  userInfo: any;
}

export const getUserInfoAPI = () => {
  return api.get('/user/info');
};

export const loginAPI = (data: { username: string; password: string }): Promise<LoginResponse> => {
  return api.post('/auth/login', data);
};

export const registerAPI = (data: { username: string; password: string; email: string }) => {
  return api.post('/auth/register', data);
};
