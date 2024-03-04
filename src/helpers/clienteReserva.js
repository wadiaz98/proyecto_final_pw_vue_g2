import axios from "axios";

const registrar = async (body) => {
  const data = axios.post(`http://localhost:8081/API/v1.0/AVIS/reservas`, body)
    .then((r) => r.data);
  console.log(data);
  return data;
};
/* REVISAR LA URL  */
const pago = async (tarjeta, body) => {
    const data = axios.post(`http://localhost:8081/API/v1.0/AVIS/reservas/pago`, tarjeta, body)
      .then((r) => r.data);
    console.log(data);
    return data;
  };
export const registrarFachada = async (body) => {
    return await registrar(body)
  }
  export const pagoFachada = async (tarjeta, body) => {
    return await pago(tarjeta, body)
  }

