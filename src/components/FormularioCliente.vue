<template>
  <div class="container">
    <hr />
    <label for="">Cédula</label>
    <input v-if="funcion === 'insertar'" type="text" v-model="cedula" />
    <input
      v-else
      type="text"
      v-model="cedula"
      :disabled="this.funcion === 'visualizar' || this.tipo === 'C'"
    />

    <label for="">Nombre</label>
    <input v-if="funcion === 'insertar'" type="text" v-model="nombre" />
    <input
      v-else
      type="text"
      v-model="nombre"
      :disabled="this.funcion == 'visualizar'"
    />

    <label for="">Apellido</label>
    <input v-if="funcion === 'insertar'" type="text" v-model="apellido" />
    <input
      v-else
      type="text"
      v-model="apellido"
      :disabled="this.funcion == 'visualizar'"
    />

    <label for="">Fecha de nacimiento</label>
    <input
      v-if="funcion === 'insertar'"
      type="datetime-local"
      v-model="fechaNacimiento"
    />
    <input
      v-else
      type="text"
      v-model="fechaNacimiento"
      :disabled="this.funcion == 'visualizar'"
    />

    <label for="">Género</label>
    <input v-if="funcion === 'insertar'" type="text" v-model="genero" />
    <input
      v-else
      type="text"
      v-model="genero"
      :disabled="this.funcion == 'visualizar'"
    />

    <label for="">Contraseña</label>
    <input
      v-if="funcion === 'insertar'"
      type="password"
      v-model="contrasenia"
    />
    <input
      v-else
      type="password"
      v-model="contrasenia"
      :disabled="this.funcion == 'visualizar'"
    />
    <hr />
    <div v-if="funcion === 'insertar'" class="guardado">
      <h6>Lea nuestros términos y condiciones</h6>
      <button @click="guardar">Guardar</button>
    </div>
    <div v-if="funcion === 'visualizar'" class="otros">
      <h6 class="item_large">Lea nuestros términos y condiciones</h6>
      <button @click="volver()">Volver</button>
      <button @click="actualizar()">Actualizar</button>
    </div>
    <div v-if="funcion === 'actualizar'" class="otros">
      <h6 class="item_large">Lea nuestros términos y condiciones</h6>
      <button @click="volver()">Volver</button>
      <button @click="guardarCambios()">Guardar Cambios</button>
    </div>
  </div>
</template>

<script scoped>
import {
  registrarFachada,
  consultarFachada,
  actualizarFachada,
} from "@/helpers/clienteUsuario.js";
export default {
  props: {
    tipo: {
      type: String,
      required: true,
    },
    clave: {
      type: String,
    },
    funcion: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.handleData();
  },
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fechaNacimiento: null,
      contrasenia: null,
      genero: null,
      registro: null,
    };
  },
  methods: {
    async handleData() {
      if (this.funcion === "visualizar" || this.funcion === "actualizar") {
        var data = await consultarFachada(this.clave);
        console.log(data.nombre);
        this.cedula = this.clave;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.genero = data.genero;
        this.fechaNacimiento = data.fechaNacimiento;
        this.contrasenia = data.password;
        this.registro = data.registro;
      }
    },
    async guardar() {
      /* VERIFICAR LOS ATRIBUTOS EN EL BACK END */
      const clienteBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        password: this.contrasenia,
        /* VERIFICAR EL TIPO */
        registro: this.tipo,
      };
      var verificar = await consultarFachada(this.cedula) !== null
      console.log(verificar)
      if (verificar){
        this.mensaje("Error....", "La cedula ya existe en el sistema", "error")
        this.refrescar();
      }else{
        // INSERTA
      await registrarFachada(clienteBody);
      this.refrescar();
      console.log("¡Se registró el cliente!");
      }
      
    },
    async guardarCambios() {
      const clienteBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        password: this.contrasenia,
        /* VERIFICAR EL TIPO */
        registro: this.registro,
      };
      var data = await actualizarFachada(clienteBody.cedula, clienteBody);
      this.visualizar(this.cedula);
    },

    volver() {
      this.$router.push({ path: "/empleados/clientes" });
    },
    actualizar() {
      // Lógica para actualizar el vehículo, por ejemplo: redirigir a una página de actualización con la información del vehículo
      this.$router.push({
        path: "/actualizar_cliente",
        query: { cedula: this.cedula },
      });
    },
    visualizar(cedula) {
      // Lógica para visualizar el vehículo, por ejemplo: redirigir a una página de visualización con la información del vehículo
      this.$router.push({
        path: "/cliente",
        query: { cedula: cedula },
      });
    },
    refrescar() {
      this.cedula = null;
      this.nombre = null;
      this.apellido = null;
      this.fechaNacimiento = null;
      this.contrasenia = null;
      this.genero = null;
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
  padding: auto;
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

.otros {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Dos columnas */
  grid-template-rows: repeat(2, 100px); /* Dos filas */
  gap: 10px; /* Espacio entre las celdas */
}
.item_large {
  grid-column: span 2; /* El elemento ocupa dos columnas */
}
</style>
