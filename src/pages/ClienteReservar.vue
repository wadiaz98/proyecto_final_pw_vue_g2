<template>
  <div class="container">
  <FormularioReservarVue> </FormularioReservarVue>
  <FormularioPagoVue></FormularioPagoVue>
  <DetallesPagoVue></DetallesPagoVue>
</div>
</template>

<script>
import DetallesPagoVue from "@/components/DetallesPago.vue";
import FormularioPagoVue from "@/components/FormularioPago.vue";
import FormularioReservarVue from "@/components/FormularioReservar.vue";
export default {
  components: {
    DetallesPagoVue,
    FormularioPagoVue,
    FormularioReservarVue,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
