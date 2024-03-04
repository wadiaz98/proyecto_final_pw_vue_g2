<template>
  <div class="container">
    <h1>Reservar</h1>
    <label for="">Placa</label>
    <input type="text" v-model="placa" />
    <label for="">Cédula</label>
    <input type="text" v-model="cedula" />
    <label for="">Fecha de Inicio</label>
    <input type="datetime-local" v-model="fechaInicio" />
    <label for="">Fecha Final</label>
    <input type="datetime-local" v-model="fechaFin" />
    <button @click="reservar">Guardar</button>
  </div>
</template>

<script scoped>
import { registrarFachada } from "@/helpers/clienteReserva.js";
export default {
  data() {
    return {
      cedula: null,
      placa: null,
      fechaInicio: null,
      fechaFin: null,
    };
  },
  methods: {
    async reservar() {
      const clienteBody = {
        cedula: this.cedula,
        placa: this.placa,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin,
      };
      // VERIFICAR EL RETORNO. SI DEVUELVE CERO ES PORQUE NO SE PUEDE RESERVAR
      const valor = await registrarFachada(clienteBody);
      if (valorTotal != 0) {
        console.log("¡Se puede reservar el vehículo!");
        clienteBody.valorTotal = valor;
        this.$router.push({
          /* REVISAR URL */
          path: "/clientes/pago",
          query: { reserva: clienteBody },
        });
      }
    },
  },
};
</script>

<style>

input {
  width: 100%;
}
label {
  font-style: italic;
}

.item_large {
  grid-column: span 2; /* El elemento ocupa dos columnas */
}
</style>
