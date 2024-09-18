import { fetchWithAuth } from './apiService';

export const getUsers = async () => {
  return await fetchWithAuth('/users/', { method: 'GET' });
};
