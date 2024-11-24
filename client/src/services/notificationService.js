import axios from './axiosConfig';

export const getNotifications = async () => {
  const response = await axios.get('https://ajaliapplication.onrender.com/notifications');
  return response.data;
};

export const markNotificationAsRead = async (id) => {
  const response = await axios.put(`https://ajaliapplication.onrender.com/notifications/${id}`);
  return response.data;
};