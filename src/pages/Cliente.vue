<template>
  <h1>CREE SU CUENTA AVIS</h1>
  <RegistroCliente v-if="this.cedula !== null" tipo="C" funcion="visualizar" :clave="cedula"></RegistroCliente>
</template>


<script>
import RegistroCliente from "@/components/FormularioCliente.vue";
export default {
  components: {
    RegistroCliente,
  },

  data() {
    return {
       
        cedula: this.$route.query.cedula,

        
    };
  },
  beforeCreate() {
    this.cedula = this.$route.query.cedula;
    console.log(this.cedula)
  },
};
</script>

<style scoped>
  
</style>