import axios from "axios";

const API_URL = "http://localhost:4000/";

export const addHelp = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}help-insert`, formData);
    return response.data; //성공하면 응답데이터 반환
  } catch (error) {
    throw error;
  }
};
