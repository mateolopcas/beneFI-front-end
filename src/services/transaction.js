import api from "./apiConfig.js"

export const getTransactions = async () => {
  try {
    const response = await api.usersApi.get("/transactions");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTransaction = async (id) => {
  try {
    const response = await api.usersApi.get(`/transactions/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTransaction = async (userData) => {
  try {
    const response = await api.usersApi.post("/transactions", userData);
    return response.data;
  } catch (error) {
    throw error
  }
}

export const linkProfile = async (userId, transactionId) => {
  try {
    const response = await api.usersApi.put(`/transactions/${transactionId}/${userId}`)
    return response.data

  } catch (error) {
    throw error
  }
}

