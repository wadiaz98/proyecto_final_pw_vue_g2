<template>
  <h1>CREE SU CUENTA AVIS</h1>
  <RegistroCliente
    class="registro"
    tipo="C"
    funcion="insertar"
  ></RegistroCliente>
</template>


<script>
import RegistroCliente from "@/components/FormularioCliente.vue";
export default {
  components: {
    RegistroCliente,
  },
};
</script>

<style scoped>
.registro {
  margin: auto;
  width: 80%;
}

</style>