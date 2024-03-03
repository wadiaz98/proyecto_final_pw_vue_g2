<template>
  <h1>INICIE SESIÓN EN SU CUENTA AVIS</h1>
  <div class="container">
    <input
      type="text"
      v-model="cedula"
      placeholder="Ingrese su número de cédula"
    />
    <input
      type="password"
      v-model="contrasenia"
      placeholder="Ingrese su contraseña"
    />
    <h6>
      Este sitio está protegido por reCAPTCHA Enterprise y se aplican la
      Política de privacidad y los Términos de servicio de Google.
    </h6>

    <button @click="iniciar">Iniciar Sesión</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cedula: null,
      contrasenia:null,

    };
  },

  methods: {
    async inicio() {
        /* VERIFICAR LOS ATRIBUTOS EN EL BACK END */
      const clienteBody = {
        cedula: this.cedula,
        contrasenia:this.contrasenia,
      };
      await inicioFachada(clienteBody);
      console.log("¡Se registró el cliente!");
    },
  },
};
</script>

<style scoped>
h1 {
  align-items: center;
  font-style: italic;
}
.container {
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(1fr, 1fr));
  justify-content: flex;
  align-items: flex;
}
</style>
