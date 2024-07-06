import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = async (username, password, email) => {
  const response = await axios.post(`${API_URL}/register`, { username, password, email });
  return response.data;
};

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const fetchUserProfile = async () => {
  const response = await axios.get(`${API_URL}/profile`);
  return response.data;
};

export const updateUserProfile = async (profile) => {
  const response = await axios.put(`${API_URL}/profile`, profile);
  return response.data;
};
