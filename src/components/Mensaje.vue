<template>
  <div class="mensaje">
    <h1>{{ mensaje }}</h1>
    <button @click="esconder">OK</button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default: false,
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      mensaje:
        "HOLIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII",
    };
  },
  methods: {
    esconder() {
      this.data = !this.data;
    },
  },
};
</script>

<style scoped>
.mensaje {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
}

.mensaje-contenido {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>