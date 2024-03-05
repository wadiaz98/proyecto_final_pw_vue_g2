<template>
  <h1>PAGAR LA RESERVACIÓN</h1>
  <label for="">Ingrese su número de tarjeta</label>
  <input type="text" v-model="tarjeta" />
  <button @click="pagar">Pagar</button>
</template>

<script>
/* REcibe las datos del input del componente anterior */
import { reservarFachada } from "@/helpers/clienteReserva.js";
/* Tarjeta y el id de reserva*/
import {cobroFachada} from "@/helpers/clienteReserva.js";

export default {
  props: {
    data: {},
  },
  //DATOS DEL COBRO
  data() {
    return {
     tarjeta: null,
     id: null,

    };
  },
  methods: {
    async pagar() {
      const reserAux = data;
      const reservaFinal =await reservarFachada(reserva);
      console.log("Se realizó correctamente la reserva");
      const clienteBody = {
        tarjeta: this.tarjeta,
        id: reservaFinal.id,
      };
      await cobroFachada(clienteBody);
    },
   
  },
};
</script>
<style scoped></style>
