<template>
  <div class="container">
    <label>N° de reserva</label>
    <input
      v-model="reserva"
      type="number"
      placeholder="Ingrese el número de reserva"
    />
    <hr/>
    <button @click="buscar">Buscar</button>
    <div v-if="crear">
      <label for="">Placa</label>
      <p>{{ placa }}</p>
      <label for="">Modelo</label>
      <p>{{ modelo }}</p>
      <label for="">Estado</label>
      <p>{{ estado }}</p>
      <label for="">Desde</label>
      <p>{{ fechaInicio }}</p>
      <label for="">Hasta</label>
      <p>{{ fechaFin }}</p>
      <label for="">Reservado por</label>
      <p>{{ cedula }}</p>
      <button class="idRetirar" @click="retirar">Retirar</button>
    </div>
  </div>
</template>

<script>
import {
  retirarVehiculoReservadoFachada,
  obtenerReservaFachada,
} from "@/helpers/clienteReserva";
import mensaje from '@'
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
    };
  },

  methods: {
    async buscar() {
      var data = await obtenerReservaFachada(this.reserva);
      console.log(data);
      if (data !== undefined) {
        this.placa = data.placa;
        this.modelo = data.modelo;
        this.fechaInicio = data.fechaInicio;
        this.fechaFin = data.fechaFin;
        this.cedula = data.cedula;
        this.estado = data.estado;
        this.crear = true;
      }
    },
    async retirar() {
      var data = await obtenerReservaFachada(this.reserva);
      await retirarVehiculoReservadoFachada(this.reserva);
      this.estado = data.estado;
    },
  },
};
</script>

<style scoped>
input{
  width: 47%;
  border-radius: 10px;
  text-align: center;
}
p,
label {
  font-size: 2vmin;
  font-style: bold;
  border-radius: 15px;
  background: #9b9b9b;
  width: 100%;
  line-height: 150%;
  box-sizing: content-box;
  color: black;
  border-radius: 10px;
}
label {
  background: white;
  color: black;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;

}
button {
  padding: auto;
  background: red;
  color: white;
  line-height: 150%;
  font-size: 2vmin;
  font-style: bold;
  border: red;
  width: 30%;
  border-radius: 10px;
  margin: auto;
}
.idRetirar{
  width: 45%;
}
</style>