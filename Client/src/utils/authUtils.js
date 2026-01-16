export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
  };
  
  if (token && token.trim() !== '') {
    const bearerToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
    headers['Authorization'] = bearerToken;
  }
  
  return headers;
};

export const isUserLoggedIn = () => {
  const token = localStorage.getItem('token');
  return token && token.trim() !== '';
};

export const handleAuthError = (error) => {
  if (error.message.includes('401') || error.message.includes('Authentication required')) {
    localStorage.removeItem('token');
    window.location.href = '/login';
    return 'Your session has expired. Please login again.';
  }
  return error.message;
};
