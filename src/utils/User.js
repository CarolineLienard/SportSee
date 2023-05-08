import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:3000/` // Local API url, where the local backend is runned, make sure to use port 3000
});

// Get user data
export const getUserActivity = async (id) => {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}/activity`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

// Get user data
export const getUserInfos = async (id) => {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

// Get user data
export const getUserPerformance = async (id) => {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}/performance`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

// Get user data
export const getUserAverageSessions = async (id) => {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}/average-sessions`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}; 