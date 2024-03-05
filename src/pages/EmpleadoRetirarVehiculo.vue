<template>
  <h1>Empleado Retira Vehículo</h1>
  <button @click="reserva">Reserva</button>
  <button @click="sinReserva">Sin reserva</button>
  <RetirarVehiculoReservado/>
</template>

<script>
import { mensaje } from "@/helpers/mensaje";
import RetirarVehiculoReservado from "@/components/VehiculoReservado.vue"
export default {
  components:{
    RetirarVehiculoReservado
  }

}
</script>

<style scoped>
.registro {
  margin: auto;
  width: 80%;
}
</style>