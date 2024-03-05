<template>
  <h1>Actualizar vehículo</h1>
  <RegistroVehiculo class="registro" v-if="this.placa !== null" funcion="actualizar" :clave="placa"></RegistroVehiculo>
</template>


<script>
import RegistroVehiculo from "@/components/FormularioVehiculo.vue";
export default {
  components: {
    RegistroVehiculo,
  },

  data() {
    return {
       
        placa: this.$route.query.placa,

        
    };
  },
  beforeCreate() {
    this.placa = this.$route.query.placa;
    console.log(this.placa)
  },
};
</script>

<style scoped>
.registro {
  margin: auto;
  width: 80%;
}
</style>