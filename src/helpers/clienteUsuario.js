import axios from "axios";

const registrar = async (body) => {
    const data = axios.post(`http://localhost:8081/API/v1.0/AVIS/clientes`, body)
      .then((r) => r.data);
    console.log(data);
  };

  export const registrarFachada = async (body) => {
    return await registrar(body)
  }