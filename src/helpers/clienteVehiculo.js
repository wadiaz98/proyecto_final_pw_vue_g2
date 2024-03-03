import axios from "axios";

//Funciones
const obtenerMarcas = async () => {
  const data = axios
    .get(`http://localhost:8081/API/v1.0/AVIS/vehiculos/marcas`)
    .then((r) => r.data);
  console.log(data);

  return data;
};

const buscarPorMarca = async (marca) => {
  const data = axios
    .get(`http://localhost:8081/API/v1.0/AVIS/vehiculos/${marca}`)
    .then((r) => r.data);
  console.log(data);

  return data;
};

const actualizarVehiculo = async (placa) => {
  const data = axios
    .put(`http://localhost:8081/API/v1.0/AVIS/vehiculos/${placa}`)
    .then((r) => r.data);
  console.log(data);
};

const eliminarVehiculo = async (placa) => {
  const data = axios.delete(
    `http://localhost:8081/API/v1.0/AVIS/vehiculos/${placa}`
  ).then((r) => r.data);

  console.log("se ha eliminao");
};

//Fachadas
export const obtenerMarcasFachada = async () => {
  return await obtenerMarcas();
};

export const buscarPorMarcaFachada = async (marca) => {
  return await buscarPorMarca(marca);
};

export const actualizarVehiculoFachada = async (placa) => {
  return await actualizarVehiculo(placa);
};

export const eliminarVehiculoFachada = async (placa) => {
  return await eliminarVehiculo(placa);
};
