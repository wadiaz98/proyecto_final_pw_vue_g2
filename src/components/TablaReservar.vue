<template>
  <h1>SELECCIONA UNA MARCA Y MODELO</h1>
  <div class="buscar">
    <label>Marca:</label>
    <select v-model="marca" id="cars" @change="obtenerModelos">
      <option v-for="(marc, index) in marcas" :key="index">{{ marc }}</option>
    </select>

    <label>Modelo:</label>
    <select v-model="modelo" id="cars" @change="buscarVehiculo">
      <option v-for="(model, index) in modelos" :key="index">{{ model }}</option>
    </select>
  </div>
  <div class="tabla">
    <table v-if="teibol">
      <thead>
        <tr>
          <th>N°</th>
          <th>Placa</th>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Año</th>
          <th>Estado</th>
          <th>Valor Diario</th>
          <th v-if="sinRese"  >Reservar</th>
        </tr>
      </thead>
      <tbody>
        <!-- Utilizamos v-for para iterar sobre la lista de vehículos y generar las filas de la tabla -->
        <tr v-for="(vehiculo, index) in vehiculos" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ vehiculo.placa }}</td>
          <td>{{ vehiculo.modelo }}</td>
          <td>{{ vehiculo.marca }}</td>
          <td>{{ vehiculo.anio }}</td>
          <td>
            {{ vehiculo.estado === "D" ? "Disponible" : "No Disponible" }}
          </td>

          <td>{{ vehiculo.valorDia }}</td>

          <td>
            <button v-if="sinRese"  @click="reservar(vehiculo.placa)">Reservar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>
      Seleccione la marca y el modelo para mostrar los vehículos disponibles.
    </p>
  </div>
</template>

<script>
import { mensaje } from "@/helpers/mensaje";
import {
  obtenerMarcasFachada,
  buscarPorMarcaYModeloFachada,
  buscarModelosPorMarcaFachada,
} from "@/helpers/clienteVehiculo.js";
export default {
  props:{
    sinRese:{}
  },
  data() {
    return {
      marca: null,
      modelo: null,
      teibol: false,
      vehiculos: [],
      marcas: [],
      modelos: [],
      usuario: null,
    };
  },
  mounted() {
    this.obtenerMarcas();
  },
  methods: {
    async obtenerMarcas() {
      var data = await obtenerMarcasFachada();
      this.marcas = data;
      console.log(this.marcas);
    },
    async obtenerModelos() {
      var data = await buscarModelosPorMarcaFachada(this.marca);
      this.modelos = data
    },
    async buscarVehiculo() {
      console.log(this.marca);
      console.log(this.modelo);
      //ELIMINAR ESTO CUANDO YA TENGAN EL BACK DE BUSCAR MODELOS
      this.vehiculos = await buscarPorMarcaYModeloFachada(this.marca,this.modelo);
      this.teibol = this.vehiculos.length > 0;
    },
    reservar(placa) {
      // Lógica para visualizar el vehículo, por ejemplo: redirigir a una página de visualización con la información del vehículo
      this.$router.push({
        path: "/clientes/reservar",
        query: { placa:placa  },
       
      });
      console.log(placa)
    },

  },
};
</script>

<style scoped>
/* Estilos para la tabla */

</style>
