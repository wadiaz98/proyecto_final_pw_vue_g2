<template>
  <div class="container">
    <hr />
    <label>N° de reserva</label>
    <hr />
    <input
      v-model="reserva"
      type="number"
      placeholder="Ingrese el número de reserva"
    />
    <hr />
    <button @click="buscar">Buscar</button>
    <div v-if="crear">
      <label for="">Placa</label>
      <p>{{ placa }}</p>
      <label for="">Modelo</label>
      <p>{{ modelo }}</p>
      <label for="">Estado:</label>
      <p>{{ estado }}</p>
      <label for="">Desde:</label>
      <p>{{ fechaInicio }}</p>
      <label for="">Hasta:</label>
      <p>{{ fechaFin }}</p>
      <label for="">Reservado por:</label>
      <p>{{ cedula }}</p>
      <label v-if="extra" for="">Fecha de retiro:</label>
      <p v-if="extra">{{ retiro }}</p>
      <hr />
      <button @click="retirar">Retirar</button>
    </div>
  </div>
</template>

<script>
import {retirarVehiculoReservadoFachada ,obtenerReservaFachada} from "@/helpers/clienteReserva";
export default {
  data() {
    return {
      reserva: null,
      placa: null,
      modelo: null,
      cedula: null,
      fechaInicio: null,
      fechaFin: null,
      estado: null, // si esta disponible o no el vehículo
      retiro: null, //fecha en la que se retira el vehículo reservado
      crear: false,
      extra: false, //Creará la fecha de retiro
    };
  },
  methods: {
    async buscar() {
      var data = await obtenerReservaFachada(this.reserva);
      console.log(data)
      if (data !== undefined) {
        this.placa = data.placa;
        this.modelo = data.modelo;
        this.fechaInicio = data.fechaInicio;
        this.fechaFin = data.fechaFin;
        this.cedula = data.cedula;
        this.estado = data.estado;
        this.retiro = data.retiro;
        this.crear = true;
      }
    },
    async retirar() {
      this.extra = true;
      await retirarVehiculoReservadoFachada(this.reserva);
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  border-radius: 10px;
  text-align: center;
}

.container {
  width: 11%;
}
</style>