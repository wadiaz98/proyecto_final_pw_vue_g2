<template>
  <h1>Ingresar cliente</h1>
  <RegistroCliente class="registro" tipo="E" funcion="insertar"></RegistroCliente>
</template>


<script>
import { mensaje } from "@/helpers/mensaje";
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