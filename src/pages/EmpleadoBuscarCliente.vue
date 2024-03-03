<template>
  <h1>Empleado buscar Cliente</h1>
  <div class="buscar">
    <label>Apellido:</label>
    <input type="text" name="" v-model="apellido" />
    <button @click="consultarTodos()">Buscar</button>
  </div>
  <div class="tabla">
    <table>
      <thead>
        <tr>
          <th>N°</th>
          <th>Cedula</th>
          <th>nombre</th>
          <th>Apellido</th>
          <th>Visualizar</th>
          <th>Actualizar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <!-- Utilizamos v-for para iterar sobre la lista de estudiantes y generar las filas de la tabla -->
        <tr v-for="(cliente, index) in this.clientes" :key="index">
          <td>{{ index + 1}} </td>
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
import {consultarTodosFachada,} from '@/helpers/clienteUsuario.js'
export default {
  data() {
    return {
      apellido: null,
      clientes: [],
    };
  },
  methods: {
   async consultarTodos() {
      const data = await consultarTodosFachada(this.apellido);
      this.clientes = data;
  }
}
}
</script>

<style scoped>
/* Estilos para la tabla */
.tabla {
  margin-top: 20px;
  display: grid;
  width: 100%;
  border-collapse: collapse;
  justify-content: center;
}
/* Estilos para las celdas de encabezado */
.tabla th {
  background-color: #4B3F53   ;
/*   border: 1px solid #dddddd; */
  padding: 8px;
  text-align: left;
  color: #F1BF57;
}

/* Estilos para las celdas de datos */
.tabla td {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

/* Estilos para las filas impares */
.tabla tr:nth-child(odd) {
  background-color: #f9f9f9;
}

/* Bordes redondos para la tabla */
.tabla {
  border-radius: 10px;
  overflow: hidden;
}
</style>