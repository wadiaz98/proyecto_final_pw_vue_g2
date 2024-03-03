<template>
  <h1>DETALLES DEL VEHÍCULO</h1>
  <div class="container">
  <label for="">Placa</label>
  <p>{{ placa }}</p>
  <label for="">Modelo</label>
  <p>{{ modelo }}</p>
  <label for="">Marca</label>
  <p>{{ marca }}</p>
  <label for="">Año</label>
  <p>{{ anio }}</p>
  <label for="">País</label>
  <p>{{ pais }}</p>
  <label for="">Cilindraje</label>
  <p>{{ cilindraje }}</p>
  <label for="">Avalúo</label>
  <p>{{avaluo }}</p>
  <label for="">Valor Diario</label>
  <p>{{ valorDia }}</p>
  <label for="">Estado</label>
  <p>{{ estado }}</p>
  
</div>
<button>Regresar</button>

</template>

<script>
import {buscarPorPlacaFachada} from '@/helpers/clienteVehiculo.js'
export default {
  data() {
    return {
       id:null,
        placa: null,
        modelo: null,
        marca: null,
        anio:null,
        pais:null,
        cilindraje:null,
        avaluo:null,
        valorDia:null,
        estado:null
        
    };
  },
  mounted() {
    const placa = this.$route.query.placa;
    this.obtenerDetallesVehiculo(placa);
  },
  methods: {
    async obtenerDetallesVehiculo(placa) {
        const data= await buscarPorPlacaFachada(placa);
        this.placa=placa
        this.modelo=data.modelo
        this.marca = data.marca
        this.anio=data.anio
        this.pais=data.pais
        this.cilindraje=data.cilindraje + " cc"
        this.avaluo =  "$ "+ parseFloat(data.avaluo)
        this.valorDia="$ "+data.valorDia
        this.estado = data.estado

        console.log("Se obtuvo los datos del vehiculo")
    }
  },
};
</script>

<style scoped>
p, label {
  font-size: 2vmin;
  font-style: bold;
  border-radius: 15px;
  background: #9b9b9b;
  width:100%;
  line-height: 200%;
  box-sizing: content-box;
  color: black;
}
label{
    background: white;
    color: black;

}
.container {
  display: grid;
  justify-content: center;
  align-items:center;
  grid-template-columns: repeat(2, 1fr);
  padding: auto;
  width: 30%;
  grid-column-gap:1%

}
button{
padding: auto;
background: red;
color:white;
line-height: 150%;
font-size: 2vmin;
font-style: bold;
border:red;
width: 10%;
margin:center

}
</style>
