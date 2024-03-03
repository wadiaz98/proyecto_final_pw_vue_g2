import axios from "axios";

const registrar = async (body) => {
  const data = axios.post(`http://localhost:8081/API/v1.0/AVIS/clientes`, body)
    .then((r) => r.data);
  console.log(data);
};
const consultarTodos = async (apellido) => {
  const data = axios.get(`http://localhost:8081/API/v1.0/AVIS/clientes/${apellido}`).then(r => r.data)
  console.log(data)
  return data
}
const consultarEstudiante = async (cedula)=> {
  const data = axios.get(`http://localhost:8081/API/v1.0/AVIS/clientes/${cedula}`).then(r => r.data)
  console.log(data)
  return data
}
const actualizar = async (cedula,body) => {
  const data = axios.put(`http://localhost:8081/API/v1.0/AVIS/clientes/${cedula}`,body).then(r=>r.data)
  console.log(data)
}
const eliminar =  async (id) =>{
  const data = axios.delete(`http://localhost:8081/API/v1.0/AVIS/clientes/${cedula}`).then(r=>r.data)
  console.log(data)
}






export const consultarTodosFachada = async (apellido) => {
  return await consultarTodos(apellido);
}

export const registrarFachada = async (body) => {
  return await registrar(body)
}
export const consultarEstudianteFacade = async (cedula)=> {
  return await consultarEstudiante(cedula);
}
export const actualizarFacade = async(cedula, body) => {
  return await actualizar(cedula, body);
}
export const eliminarFacade = async(cedula) => {
  return await eliminar(cedula);
}