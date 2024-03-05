<template>
  <h1>SU RESERVA SE REALIZÓ CORRECTAMENTE</h1>
  <div class="container">
    <label for="">No. Reserva</label>
    <p>{{ id }}</p>
    <label for="">/Fecha de cobro:</label>
    <p>{{ fechaCobro }}</p>
    <label for="">Pago con la tarjeta</label>
    <p>{{ tarjeta }}</p>
    <label for="">Valor cancelado</label>
    <p>{{ valorTotal }}</p>
  </div>
  <button @click="inicio">Regresar</button>
</template>

<script>
export default {
  props: {
    tarjeta: {},
    data: {},
  },
  data() {
    return {
      id: null,
      tarjeta: null,
      fechaCobro: null,
      valorTotal: null,
    };
  },
  mounted() {
    const reserva = data;
    tarjeta = tarjeta;
    id = reserva.id;
    fechaCobro = reserva.fechaInicio;
    valorTotal = reserva.valorTotal;
  },
  methods: {
    inicio() {
      this.$router.push({
        path: "/inicio",
      });
    },
  },
};
</script>

<style scoped></style>
