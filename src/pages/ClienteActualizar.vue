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
  data() {
    return {
      cedula: null,
    };
  },
  data() {
    return {
      cedula: null,
    };
  },
};
</script>

<style>
</style>