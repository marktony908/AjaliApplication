import axios from './axiosConfig';

export const getAllIncidents = async () => {
  try {
    const response = await axios.get('/incidents');
    return response.data;
  } catch (error) {
    console.error('Error fetching incidents:', error);
    throw error;
  }
};

export const createIncident = async (formData) => {
  try {
    const response = await axios.post('/incidents', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating incident:', error);
    throw error;
  }
};

export const updateIncident = async (id, data) => {
  try {
    const response = await axios.put(`/incidents/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating incident:', error);
    throw error;
  }
};

export const deleteIncident = async (id) => {
  try {
    await axios.delete(`/incidents/${id}`);
  } catch (error) {
    console.error('Error deleting incident:', error);
    throw error;
  }
};