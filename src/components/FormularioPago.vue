<template>
  <h1>PAGAR</h1>
  <label for="">Ingrese su número de tarjeta</label>
  <input type="text" v-model="tarjeta" />
  <button @click="pagar">Pagar</button>
</template>

<script>
import { pagoFachada } from "@/helpers/clienteReserva.js";

export default {
  props: {
    data: {},
  },
  methods: {
    async pagar() {
      const reserva = data;
      await pagoFachada(this.tarjeta, reserva);
      console.log("Se realizó correctamente el pago");
      /* VERIFICAR URL */
      this.$emit("ver", this.tarjeta, reserva);
    },
  },
};
</script>
<style scoped></style>
