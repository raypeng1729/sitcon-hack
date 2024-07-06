import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchProposals = async () => {
  const response = await axios.get(`${API_URL}/proposals`);
  return response.data;
};

export const fetchProposalDetails = async (id) => {
  const response = await axios.get(`${API_URL}/proposals/${id}`);
  return response.data;
};

export const fetchComments = async (proposalId) => {
  const response = await axios.get(`${API_URL}/proposals/${proposalId}/comments`);
  return response.data;
};

export const postComment = async (proposalId, content) => {
  const response = await axios.post(`${API_URL}/proposals/${proposalId}/comments`, { content });
  return response.data;
};

export const flagComment = async (commentId) => {
  const response = await axios.post(`${API_URL}/comments/${commentId}/flag`);
  return response.data;
};
