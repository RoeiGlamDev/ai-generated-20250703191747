import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-firebase-project-id.firebaseio.com',
});

export const getVideos = async () => {
  const response = await api.get('/videos.json');
  return response.data;
};

export const uploadVideo = async (formData) => {
  const response = await api.post('/videos.json', formData);
  return response.data;
};