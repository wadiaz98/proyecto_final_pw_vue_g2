<template>
  <div class="container">
    <FormularioReservarVue v-if="formRes" @ver="actualizarForm" :placaRecibida="this.placa"> </FormularioReservarVue>
    <FormularioPagoVue v-if="formPay" @ver="actualizarPay" :data="clienteBody"></FormularioPagoVue>
    <DetallesPagoVue v-if="detaPay" :data="clienteBody" :tarjeta="tarjeta" ></DetallesPagoVue>
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
  mounted(){
    this.placa=this.$route.query.placa,
    console.log(this.placa)
  },
  data() {
    return {
      placa: this.$route.query.placa,
      formRes: true,
      formPay: false,
      detaPay: false,
      clienteBody:null,
    };
  },
  methods: {
    actualizarForm(data) {
      this.clienteBody=data;
      this.formRes = false;
      this.formPay = true;
    },
    actualizarPay(data) {
      this.clienteBody=data;
      this.formPay = false;
      this.detaPay = true;
    },
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
