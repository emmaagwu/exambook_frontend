// services/apiService.js

const API_URL = 'http://localhost:5000';

export const fetchWithAuth = async (url, options = {}) => {
  try {
    const token = localStorage.getItem('token');
    console.log('JWT Token:', token); // Debugging
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,  // Attach token to all requests
    };

    const response = await fetch(`${API_URL}${url}`, {
      ...options,
      headers: { ...headers, ...options.headers }, // Merge any custom headers
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch with auth error:', error);
    throw error;
  }
};
