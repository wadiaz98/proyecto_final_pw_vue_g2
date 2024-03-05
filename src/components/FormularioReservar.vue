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
import { consultarDisponibilidadFachada } from "@/helpers/clienteReserva.js";
export default {
  props: {
    placaRecibida:{},
  },
  data() {
    return {
      placa:null,
      cedula: null,
      fechaInicio: null,
      fechaFin: null,
    };
  },
  mounted(){
   this.placa=this.placaRecibida
  },
  methods: {
    async reservar() {
      const clienteBody = {
        cedula: this.cedula,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin,
      };
      // VERIFICAR EL RETORNO. SI DEVUELVE CERO ES PORQUE NO SE PUEDE RESERVAR
      const valor = await consultarDisponibilidadFachada(clienteBody);
      if (valor != 0) {
        console.log("¡Se puede reservar el vehículo!");
        clienteBody.valorTotal = valor;
        this.$emit("ver", clienteBody);
      }
    },
  },
};
</script>

<style scoped>
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
