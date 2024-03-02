<template>
  <div class="container">
    <hr />
    <label for="">Cédula</label>
    <input type="text" v-model="cedula" />
    <label for="">Nombre</label>
    <input type="text" v-model="nombre" />
    <label for="">Apellido</label>
    <input type="text" v-model="apellido" />
    <label for="">Fecha de nacimiento</label>
    <input type="datetime-local" v-model="fechaNacimiento" />
    <label for="">Género</label>
    <input type="text" v-model="genero" />
    <label for="">Contraseña</label>
    <input type="text" v-model="contrasenia" />
    <hr />
    <div class="guardado">
      <h6>Lea nuestros términos y condiciones</h6>
      <button @click="guardar">Guardar</button>
    </div>
  </div>
</template>

<script scoped>
import {registrarFachada} from '@/helpers/clienteUsuario.js'
export default {
  props:{
    tipo: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fechaNacimiento:null,
      contrasenia:null,
      genero:null,
    };
  },

  methods: {
    async guardar() {
        /* VERIFICAR LOS ATRIBUTOS EN EL BACK END */
      const clienteBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
        genero:this.genero,
        fechaNacimiento:this.fechaNacimiento,
        contrasenia:this.contrasenia,
        /* VERIFICAR EL TIPO */
        registro: this.tipo
      };

      await registrarFachada(clienteBody);
      console.log("¡Se registró el cliente!");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: auto;
  height: 70vh;
}
input {
  width: 100%;
}
label {
  font-style: italic;
}
.guardado {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
}
</style>
