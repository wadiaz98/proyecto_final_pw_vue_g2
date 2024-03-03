<template>
  <h1>Empleado buscar Vehículo</h1>
  <div class="buscar">
    <label>Marca:</label>
    <select v-model="marca" id="cars">
      <option v-for="(marc, index) in marcas" :key="index">{{ marc }}</option>
    </select>
  </div>
  <div v-if="teibol" class="tabla">
    <table>
      <thead>
        <tr>
          <th>N°</th>
          <th>Placa</th>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Visualizar</th>
          <th>Actualizar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <!-- Utilizamos v-for para iterar sobre la lista de estudiantes y generar las filas de la tabla -->
        <tr v-for="(vehiculo, index) in vehiculos" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ vehiculo.placa }}</td>
          <td>{{ vehiculo.marca }}</td>
          <td>{{ vehiculo.modelo }}</td>
          <td><button @click="visualizar">Visualizar</button></td>
          <td><button @click="actualizar">Actualizar</button></td>
          <td><button @click="eliminarVehiculo(vehiculo.placa)">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  buscarPorMarcaFachada,
  obtenerMarcasFachada,
  eliminarVehiculoFachada
} from "@/helpers/clienteVehiculo.js";
export default {
  data() {
    return {
      marca: null,
      teibol: false,
      vehiculos: [],
      marcas: [],
    };
  },
  mounted() {
    this.obtenerMarcas();
  },
  updated() {
    this.buscarVehiculo();
  },
  methods: {
    async obtenerMarcas() {
      var data = await obtenerMarcasFachada();
      this.marcas = data;
      console.log(this.marcas);
    },
    async buscarVehiculo() {
      console.log(this.marca)
      this.vehiculos = await buscarPorMarcaFachada(this.marca);
      if (this.vehiculos !== []) {
        this.teibol = true;
      }
    },
    async eliminarVehiculo(placa) {
      await eliminarVehiculoFachada(placa);
    },
    actualizar() {
      this.$router.push("/actualizar_vehiculo");
    },
    visualizar() {
      this.$router.push("/vehiculo");
    },
  },
};
</script>

<style scoped>
/* Estilos para la tabla */
.tabla {
  margin-top: 20px;
  display: grid;
  width: 100%;
  border-collapse: collapse;
  justify-content: center;
}
/* Estilos para las celdas de encabezado */
.tabla th {
  background-color: #4B3F53   ;
/*   border: 1px solid #dddddd; */
  padding: 8px;
  text-align: left;
  color: #F1BF57;
}

/* Estilos para las celdas de datos */
.tabla td {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

/* Estilos para las filas impares */
.tabla tr:nth-child(odd) {
  background-color: #f9f9f9;
}

/* Bordes redondos para la tabla */
.tabla {
  border-radius: 10px;
  overflow: hidden;
}
</style>