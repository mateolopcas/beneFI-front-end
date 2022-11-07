import apiConfig from "./apiConfig";
import usersApi from "./apiConfig"

export const getUsers = async () => {
  try {
    const response = await usersApi.get("/userProfiles");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await usersApi.get(`/userProfiles/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await usersApi.post("/userProfiles", userData);
    return response.data;
  } catch (error) {
    throw error
  }
}

export const updateUser = async (id, userData) => {
  try {
    const response = await usersApi.put(`/userProfiles/${id}`, userData)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await usersApi.delete(`/userProfiles/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};