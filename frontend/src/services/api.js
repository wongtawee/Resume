import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth token here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle errors globally
    const message = error.response?.data?.message || error.message || 'Something went wrong';
    console.error('API Error:', message);
    return Promise.reject(error);
  }
);

// Profile API
export const profileAPI = {
  // Get profile
  getProfile: async () => {
    try {
      const response = await api.get('/api/profile');
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Create profile
  createProfile: async (data) => {
    try {
      const response = await api.post('/api/profile', data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Update profile
  updateProfile: async (id, data) => {
    try {
      const response = await api.put(`/api/profile/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
};

// Works API
export const worksAPI = {
  // Get all works
  getAllWorks: async (featured = false) => {
    try {
      const url = featured ? '/api/works?featured=true' : '/api/works';
      const response = await api.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Get single work
  getWorkById: async (id) => {
    try {
      const response = await api.get(`/api/works/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Create work
  createWork: async (data) => {
    try {
      const response = await api.post('/api/works', data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Update work
  updateWork: async (id, data) => {
    try {
      const response = await api.put(`/api/works/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Delete work
  deleteWork: async (id) => {
    try {
      const response = await api.delete(`/api/works/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
};

export default api;
