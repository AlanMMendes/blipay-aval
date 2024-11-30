import axios from "axios";

// Base URL da mock API (ou o endpoint real da sua API)
const API_URL = "http://localhost:5000/posts";

// Função para fazer o POST
const postData = async (data: { title: string; body: string }) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data; // Retorna os dados recebidos da API
  } catch (error) {
    console.error("Erro na requisição POST:", error);
    return null;
  }
};

export default postData;
