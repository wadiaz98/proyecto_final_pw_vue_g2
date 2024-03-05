<template>
  <h1>¿TIENE RESERVA?</h1>
  <button @click="reserva()">Reserva</button>
  <button @click="sinReserva()">Sin reserva</button>
  <RetirarVehiculoReservado v-if="isReserva" />
  <RetirarSinReserva v-if="isntReserva" />
</template>

<script>
import { mensaje } from "@/helpers/mensaje";
import RetirarVehiculoReservado from "@/components/VehiculoReservado.vue";
import RetirarSinReserva from "@/components/RetirarSinReserva.vue";
export default {
  components: {
    RetirarVehiculoReservado,
    RetirarSinReserva,
  },
  data() {
    return {
      isReserva: false,
      isntReserva: false,
    };
  },

  methods: {
    reserva() {
      this.isreserva = true;
      this.isntreserva = false;
      console.log(this.isntReserva);
      console.log(this.isReserva);
    },
    sinReserva() {
      this.isntReserva = true;
      this.isreserva = false;
      console.log(this.isntReserva);
      console.log(this.isReserva);
    },
  },
};
</script>

<style scoped>
.registro {
  margin: auto;
  width: 80%;
}
</style>