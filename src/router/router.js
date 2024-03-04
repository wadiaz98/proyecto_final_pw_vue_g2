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
    path: "/logout",
    component: () => import("@/pages/LogOut.vue"),
  },
  {
    path: "/cliente/vehiculos",
    component: () => import("@/pages/ClienteListaVehiculos.vue"),
  },
  {
    path: "/cliente/actualizar",
    component: () => import("@/pages/ClienteActualizar.vue")
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
    component: () => import("@/pages/Vehiculo.vue"),
  },
  {
    path: "/actualizar_cliente",
    component: () => import("@/pages/EmpleadoActualizarCliente.vue"),
  },
  {
    path: "/cliente",
    component: () => import("@/pages/Cliente.vue"),
  },
  {
    path: "/empleados/clientes/nuevo",
    component: () => import("@/pages/EmpleadoIngresarCliente.vue"),
  },
  {
    path: "/empleados/vehiculo/nuevo",
    component: () => import("@/pages/EmpleadoIngresarVehiculo.vue"),
  },
  /* {
    path: "/cliente/pago",
    component: () => import("@/pages/ClientePago.vue"),
  }, */
  {
    path: "/empleados/vehiculo/retirar",
    component: () => import("@/pages/EmpleadoRetirarVehiculo.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/PaginaInicio.vue"),
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
