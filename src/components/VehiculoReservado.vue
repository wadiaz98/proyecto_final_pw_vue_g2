<template>
  <div class="container">
    <hr />
    <label>N° de reserva</label>
    <hr />
    <input
      v-model="reserva"
      type="number"
      placeholder="Ingrese el número de reserva"
    />
    <hr />
    <button @click="buscar">Buscar</button>
    <div v-if="crear">
      <label for="">Placa</label>
      <p>{{ placa }}</p>
      <label for="">Modelo</label>
      <p>{{ modelo }}</p>
      <label for="">Estado:</label>
      <p>{{ estado }}</p>
      <label for="">Fecha:</label>
      <p>{{ fecha }}</p>
      <label for="">Reservado por:</label>
      <p>{{ cedula }}</p>
      <label for="">Reserva:</label>
      <p>{{ accion }}</p>
      <label for="">Fecha de retiro:</label>
      <p>{{ retiro }}</p>
      <hr />
      <button @click="retirar">Retirar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reserva: null,
      placa: null,
      modelo: null,
      cedula: null,
      estado: null, // si esta disponible o no el vehículo
      accion: null, //si esta ejecutada la reserva o no
      retiro: null, //fecha en la que se retira el vehículo reservado
      crear: false,
    };
  },
  methods: {
    async buscar() {
      var data = await buscarReservaFachada(this.reserva);

      if (data !== undefined) {
        this.placa = data.placa;
        this.modelo = data.modelo;
        this.fecha = data.fecha;
        this.cedula = data.cedula;
        this.estado = data.estado;
        this.accion = data.accion;
        this.retiro = data.retiro;
        this.crear = true;
      }
    },
    async retirar() {
      const body = {
        estado: this.estado,
        retiro: this.retiro,
        accion: this.accion,
      };
      await retirarVehiculoFachada(this.reserva, body);
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  border-radius: 10px;
  text-align: center;
}

.container {
  width: 11%;
}
</style>