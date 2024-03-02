<template>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inicio</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img id="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Avis_logo.svg/1200px-Avis_logo.svg.png"
          alt="Cannot access to resource"
        />
        <navBar id="idNavBar"/>
      </header>

      <section>
        <div class="principal">
          <p>
            Alquila comodidad y confort. En AVIS, disponemos de los mejores
            modelos de autos para ti. A los mejores precios
          </p>
          <img id="lambo"
          src="https://media.es.wired.com/photos/6425e0e4b4e328f8839787f4/16:9/w_2560%2Cc_limit/Lamborghini-Revuelto-Featured-Gear.jpg"
          alt="Cannot access to resource"
          />
        </div>
      </section>
      <aside></aside>

      <footer>
        <h1>© 2024 Grupo 2, Programación Web</h1>
      </footer>
    </div>
    
  </body>

</template>

<script>
import navBar from '@/components/NavBar.vue'
export default {
  name: "App",
  components: {
    navBar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo {
  width: 20%;
}
#lambo{
  width:100%
}

section {
  background: red;
  width: 100%;
  font-size: 5vmin;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
header {
  background: #9b9b9b;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
footer {
  width: 100%;
  background: #222;
  color: #fff;
  font-size: 1vmin;
  text-transform: uppercase;
}
header .navBar{
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
