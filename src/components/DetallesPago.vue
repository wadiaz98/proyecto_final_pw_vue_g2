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
    data: {},
  },
  data() {
    return {
      cobro:{
      reserva:null,
      numerotarjeta: null,
      fecha:null
      },
      id:null,
      tarjeta:null,
     valorTotal:null,
     fechaCobro:null,
    };
  },
  mounted() {
    this.cobro = data; /* Recibiendo los datos del padre */
    this.id = this.cobro.reserva.id;
    this.tarjeta = this.cobro.tarjeta;
    this.valorTotal=this.cobro.reserva.total;
    this.fechaCobro= this.cobro.fecha;

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
