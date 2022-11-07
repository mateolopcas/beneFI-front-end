import api from "./apiConfig.js"

export const getTransactions = async () => {
  try {
    const response = await api.get("/transactions");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTransaction = async (id) => {
  try {
    const response = await api.get(`/transactions/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTransaction = async (userData) => {
  try {
    const response = await api.post("/transactions", userData);
    return response.data;
  } catch (error) {
    throw error
  }
}

