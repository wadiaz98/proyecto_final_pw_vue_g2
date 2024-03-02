<template>
  <div class="container">
  <header>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Avis_logo.svg/1200px-Avis_logo.svg.png" alt="Cannot access to resource">
  </header>

  <section></section>
  <aside></aside>
  <footer></footer>
</div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header{
  flex-direction: row;
}
img{
height: 50px;
width:100%;


}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

</style>

