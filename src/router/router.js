import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/inicio",
    component: () => import("@/pages/PaginaInicio.vue"),
  },
  {
    path: "/registrarse",
    component: () => import("@/pages/ClienteRegistrar.vue"),
  },
  {
    path: "/loggin",
    component: () => import("@/pages/Login.vue"),
  },
  {
    path: "/buscar",
    component: () => import("@/pages/EmpleadoBuscarVehiculo.vue"),
  },
  {
    path: "/empleados/clientes",
    component: () => import("@/pages/EmpleadoBuscarCliente.vue"),
  },
  {
    path: "/actualizar_vehiculo",
    component: () => import("@/pages/EmpleadoActualizarVehiculo.vue"),
  },
  {
    path: "/vehiculo",
    component: () => import("@/pages/Vehiculo.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/PaginaInicio.vue"),
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
