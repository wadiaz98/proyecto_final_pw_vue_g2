import axios from "axios";

const obtenerMarcas = () =>{
    const data = axios.get(`http://localhost:8081/API/v1.0/AVIS/vehiculos/marcas`).then(r = r.data)
    console.log(data)
}

const buscarPorMarca = () =>{
    const data = axios.get(`http://localhost:8081/API/v1.0/AVIS/vehiculos/marcas`).then(r = r.data)
    console.log(data)
}