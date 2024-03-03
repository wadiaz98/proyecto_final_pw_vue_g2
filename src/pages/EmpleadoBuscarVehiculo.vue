<template>
  <h1>Empleado buscar Vehículo</h1>
  <div class="buscar">
    <label>Marca:</label>
    <select v-model="marca" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </div>
  <div v-if="teibol" class="tabla">
    <table>
      <thead>
        <tr>
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
        <tr v-for="vehiculo in vehiculos" :key="vehiculo.id">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td><button @click="visualizar">Visualizar</button></td>
          <td><button @click="actualizar">Actualizar</button></td>
          <td><button @click="eliminarVehiculo">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marca: null,
      teibol: false,
      vehiculos: [],
      marcas : [],
    };
  },
  methods: {
    async obtenerMarcas() {
      this.marcas = await obtenerMarcasFachada();
    },
    async buscarVehiculo() {
      this.vehiculos = await buscarMarcaFachada(this.marca);
      if (this.vehiculos !== []) {
        this.teibol = true;
      }
    },
    async eliminarVehiculo() {
      await eliminarVehiculoFachada()
    },
    actualizar() {
      this.$router.push("/actualizar_vehiculo");
    },
    visualizar(){
      this.$router.push("/vehiculo");
    }
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
  background-color: #f2f2f2;
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
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