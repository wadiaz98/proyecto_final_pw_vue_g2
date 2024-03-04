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

    <button @click="inicio">Iniciar Sesión</button>
  </div>
</template>

<script>
import { ElMessageBox } from "element-plus";
export default {
  data() {
    return {
      cedula: null,
      contrasenia: null,
    };
  },

  methods: {
    async inicio() {
      /* VERIFICAR LOS ATRIBUTOS EN EL BACK END */
      const clienteBody = {
        cedula: this.cedula,
        contrasenia: this.contrasenia,
      };

      if (this.cedula === "admin" && this.contrasenia === "admin") {
        this.$emit("cambio-tipo", "E");
        await this.redireccionar();
      } else {
        this.mostrarMensaje();
        /* if (await inicioFachada(clienteBody)) {
          this.$emit("cambio-tipo", "C");
          await this.redireccionar();
        } else { */
        // mensaje de revisa usuario y contraseña
        console.log("Revisa usuario y contraseña");
        // }
      }
    },

    redireccionar() {
      this.$router.push({ path: "/inicio" });
    },

    mostrarMensaje() {
      ElMessageBox.alert(
        "Credenciales Incorrectas",
        "Revise sus credenciales e intente nuevamente",
        {
          confirmButtonText: "Ok",
          type: "error",
          position: "center",
          customClass:"messageBox",
          callback: () => {
            // Acciones después de hacer clic en "Aceptar"
            console.log("Mensaje aceptado");
          },
        }
      );
    },
  },
};
</script>

<style scoped>

.messageBox{
  background-color: #833e3e!important;
  color:rgb(221, 23, 23)3!important; 
  border: 1px solid #1c0fcf; 
  padding: 10px; 
  width: 10%!important; 
}
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
