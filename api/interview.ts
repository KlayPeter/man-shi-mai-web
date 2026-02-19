import api from '@/lib/request';

export const startInterviewAPI = (data: any) => {
  return api.post('/interview/start', data);
};

export const getInterviewHistoryAPI = () => {
  return api.get('/interview/history');
};
