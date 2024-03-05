<template>
  <h1>CREE SU CUENTA AVIS</h1>
  <RegistroCliente
    v-if="this.cedula !== null"
    tipo="C"
    funcion="actualizar"
    :clave="cedula"
  ></RegistroCliente>
</template>


<script>
import RegistroCliente from "@/components/FormularioCliente.vue";
export default {
  components: {
    RegistroCliente,
  },
  props: ["dato"],
  data() {
    return {
      cedula: this.dato,
    };
  },
  mounted() {
    console.log(this.dato);
  },
};
</script>

<style>
</style>