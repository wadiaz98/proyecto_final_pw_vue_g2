<template>
  <h1>Empleado buscar Cliente</h1>
  <div class="buscar">
    <label>Apellido:</label>
    <input type="text" name="" v-model="apellido" />
  </div>
  <div class="lista">
    <table>
      <thead>
        <tr>
          <th>N°</th>
          <th>Cedula</th>
          <th>nombre</th>
          <th>Apellido</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- Utilizamos v-for para iterar sobre la lista de estudiantes y generar las filas de la tabla -->
        <tr v-for="(cliente, index) in this.clientes" :key="index">
          <td>{{ index }} + 1</td>
          <td>{{ cliente.cedula }}</td>
          <td>{{ cliente.nombre }}</td>
          <td>{{ cliente.apellido }}</td>
          <td><button>Visualizar</button></td>
          <td><button>Actualizar</button></td>
          <td><button>Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script scoped>
import {registrarFachada} from '@/helpers/clienteUsuario.js'
export default {
  data() {
    return {
      apellido: null,
      clientes: [],
    };
  },
  methods: {
   async consultarTodos() {
      const data = await consultarTodosFachada();
      this.clientes = data;
  }
}
}
</script>

<style>
</style>