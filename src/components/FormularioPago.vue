<template>
  <h1>PAGAR</h1>
  <label for="">Ingrese su número de tarjeta</label>
  <input type="text" v-model="tarjeta" />
  <button @click="pagar">Pagar</button>
</template>

<script>
import { pagofachada } from "@helpers/clienteReserva.js";
export default {
  methods: {
    async pagar() {
      const reserva = this.$route.query.reserva;
      await pagofachada(this.tarjeta, reserva);
      console.log("Se realizó correctamente el pago");
      /* VERIFICAR URL */
      this.$router.push({
        path: "/siguiente-pagina",
        query: { tarjeta: this.tarjeta, reserva: reserva },
      });
    },
  },
};
</script>
<style></style>
