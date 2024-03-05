<template>
  <div v-if="tipo === 'E'" class="menu">
    <router-link to="/buscar">Buscar vehículo</router-link>
    <router-link to="/empleados/clientes">Clientes</router-link>
    <router-link to="/empleados/clientes/nuevo">NuevoCliente</router-link>
    <router-link to="/empleados/vehiculo/nuevo">Nuevo Vehículo </router-link>
    <router-link to="/empleados/vehiculo/retirar">Retirar vehículo </router-link>
    <router-link to="/empleados/reporte">Reporte Reservas</router-link>
    <router-link to="/logout">Salir</router-link>
  </div>
  <div v-else class="menu">
    <router-link to="/cliente/vehiculos">Vehiculos Disponibles</router-link>
    <router-link v-if="tipo !=='V'" to="/cliente/actualizar">Editar datos</router-link>
    <router-link v-if="tipo ==='V'" to="/registrarse">Registrarse</router-link>
    <router-link v-if="tipo ==='V'" to="/loggin">Iniciar sesión</router-link>
    <router-link v-if="tipo !=='V'" to="/logout">Salir</router-link>
  </div>

</template>

<script>
import router from "@/router/router";
export default {
  props:{
    tipo:{
      default: "V",
      required: true,
      type: String,
    }
  },
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