<template>
  <h1>Actualizar vehículo</h1>
  <RegistroVehiculo v-if="this.placa !== null" funcion="visualizar" :clave="placa"></RegistroVehiculo>
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

<style>
  p,
label {
  font-size: 2vmin;
  font-style: bold;
  border-radius: 15px;
  background: #9b9b9b;
  width: 100%;
  line-height: 200%;
  box-sizing: content-box;
  color: black;
}
label {
  background: white;
  color: black;
}
.container {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  padding: auto;
  width: 30%;
  grid-column-gap: 1%;
}
button {
  padding: auto;
  background: red;
  color: white;
  line-height: 150%;
  font-size: 2vmin;
  font-style: bold;
  border: red;
  width: 10%;
  margin: center;
}
</style>