<template>
  <div class="principal">
    <p>
      Alquila comodidad y confort. En AVIS, disponemos de los mejores modelos de
      autos para ti. A los mejores precios
    </p>
    <img
      id="lambo"
      src="https://media.es.wired.com/photos/6425e0e4b4e328f8839787f4/16:9/w_2560%2Cc_limit/Lamborghini-Revuelto-Featured-Gear.jpg"
      alt="Cannot access to resource"
    />
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route.query.usuario)
  }
};

</script>

<style>
#lambo {
  width: 100%;
}
.principal {
  background: red;
  width: 100%;
  font-size: 5vmin;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>