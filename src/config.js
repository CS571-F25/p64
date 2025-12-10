export const API_URL = import.meta.env.PROD 
  ? 'https://p64.onrender.com'  // Your deployed backend URL
  : 'http://localhost:5000/api';         // Local development