import axios from "axios";

const consultarDisponibilidad = async (body) => {
  const data = axios
    .get(`http://localhost:8081/API/v1.0/AVIS/reservas`, body)
    .then((r) => r.data);
  console.log(data);
  return data;
};
/* REVISAR LA URL  */
const pago = async (tarjeta, body) => {
  const data = axios
    .post(`http://localhost:8081/API/v1.0/AVIS/reservas/pago`, tarjeta, body)
    .then((r) => r.data);
  console.log(data);
  return data;
};

const retirarVehiculoReservado = async (numero) => {
  const data = axios.get(
    `http://localhost:8081/API/v1.0/AVIS/reservas/retirar`, { params: {numero}}
  ).then(r => r.data);
  console.log(data)
  return data
};

const obtenerReserva = async (numero) =>{
  const data = axios.get(
    `http://localhost:8081/API/v1.0/AVIS/reservas`, { params: {numero}}
  ).then(r => r.data);
  console.log(data)
  return data
}

export const consultarDisponibilidadFachada = async (body) => {
  return await consultarDisponibilidad(body);
};
export const pagoFachada = async (tarjeta, body) => {
  return await pago(tarjeta, body);
};

export const retirarVehiculoReservadoFachada = async (numero) => {
  return await retirarVehiculoReservado(numero);
};

export const obtenerReservaFachada = async (numero) =>{
  return await obtenerReserva(numero);
}