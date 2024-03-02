<template>
  <div class="menu">
    <router-link to="/regitrarse">Registrarse</router-link>
    <router-link to="/loggin">Iniciar secion</router-link>
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

<style>
menu {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.menu a {
  text-decoration: none;
  color: #333;
  color: #2c3e50;
  margin: 0px 10px;
  font-weight: bold;
  padding: 10px;
}

.menu a:hover {
  background: #ffffff;
}
.router-link-exact-active {
  background: #ffffff;
}
</style>