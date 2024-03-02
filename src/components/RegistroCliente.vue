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
    <input type="text" v-model="fechaNacimiento" />
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
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fechaNacimiento:null,
      contrasenia:null,
      genero:null,
      tipo:null
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
        fechaNacimeinto:this.fechaNacimiento,
        contrasenia:this.contrasenia,
        /* VERIFICAR EL TIPO */
        tipo:"C"
      };

      await saveFacade(clienteBody);
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
