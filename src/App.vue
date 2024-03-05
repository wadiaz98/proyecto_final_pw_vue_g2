<template>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inicio</title>
  </head>
  <body>
    <div class="container">
      <header>
        <router-link class="home" to="/inicio"
          ><img
            to="/inicio"
            id="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Avis_logo.svg/1200px-Avis_logo.svg.png"
            alt="Cannot access to resource"
        /></router-link>

        <navBar id="idNavBar" :tipo="tipo" />
      </header>

      <router-view class="router" @cambio-tipo="actualizarTipo" />
      <footer>
        <h1>© 2024 Grupo 2, Programación Web</h1>
      </footer>
    </div>
  </body>
</template>

<script>
import navBar from "@/components/NavBar.vue";
import router from "@/router/router";
import { mount } from '@vue/test-utils';
export default {
  name: "App",
  components: {
    navBar,
    router,
  },
  data() {
    return {
      tipo: "V",
      cedula: null,
    };
  },
  methods: {
    actualizarTipo(nuevoTipo) {
      console.log(nuevotipo);
      this.tipo = nuevoTipo.tipo;
      this.cedula = tipo.cedula;
      console.log(nuevotipo);
    },
    emitirDatos() {
      EventBus.$emit("cedula", this.cedula);
    },
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router {
  background: blue;
}
#logo {
  width: 20%;
}
.home {
  margin-right: auto;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
header {
  background: #9b9b9b;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
}

footer {
  width: 100%;
  background: #222;
  color: #fff;
  font-size: 1vmin;
  text-transform: uppercase;
  position: fixed;
  bottom: 0;
}
#idNavBar {
  width: 90%;
}
</style>
