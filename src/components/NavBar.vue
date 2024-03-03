<template>
  <div class="menu">
    <router-link to="/registrarse">Registrarse</router-link>
    <router-link to="/loggin">Iniciar sesión</router-link>
    <router-link to="/buscar">Buscar</router-link>
    <router-link to="/empleados/clientes">Clientes</router-link>
    <router-link to="/empleados/clientes/nuevo">NuevoCliente</router-link>
    <router-link to="/vehiculo">Vehiculo</router-link>
  </div>
</template>

<script>
import router from "@/router/router";
export default {
  components: {
    router,
  },
};
</script>

<style scoped>
menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.menu a {
  text-decoration: none;
  color: #333;
  color: #2c3e50;
  margin: 0px 5px;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
}

.menu a:hover {
  background: #ffffff;
}
.router-link-exact-active {
  background: #ffffff;
}
</style>