<template>
  <h1>PAGAR LA RESERVACIÓN</h1>
  <label for="">Ingrese su número de tarjeta</label>
  <input type="text" v-model="numeroTarjeta" />
  <button @click="pagar">Pagar</button>
</template>

<script>
/* REcibe las datos del input del componente anterior */
import { reservarFachada } from "@/helpers/clienteReserva.js";
/* Tarjeta y el id de reserva*/
import { cobroFachada } from "@/helpers/clienteReserva.js";

export default {
  props: {
    data: {},
  },
  //DATOS DEL COBRO
  data() {
    return {
      reserva: {
        placa: null,
        cedula: null,
        fechaInicio: null,
        fechaFin: null,
      },
      numeroTarjeta: null,

    };

  },
  mounted() {
    this.reserva = this.data; /* Recibiendo los datos del padre */
  },
  methods: {
    async pagar() {
      const reservaFinal = await reservarFachada(this.reserva);
      console.log("Se realizó correctamente la reserva");
      const clienteBody = {
        numeroTarjeta: this.numeroTarjeta,
        reserva: reservaFinal,
        fecha:null, 
      };
      await cobroFachada(clienteBody); 
      this.$emit("ver", clienteBody);
    },
  },
};
</script>
<style scoped></style>
