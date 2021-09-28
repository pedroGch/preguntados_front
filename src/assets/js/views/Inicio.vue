<template>
<div class="container">
  <div class="section">
    <div class="row">
      <h1>ESTE ES EL COMPONENTE INICIO ACA VA TU INICIO, Y ESTA ES SU RUTA EN EL PROYECTO: <span style="color:red">proyectoBase\assets\js\views\Inicio.vue</span> </h1>
    </div>
  </div>
</div>
</template>

<script>

export default {
  components: {
   
  },

  data() {
    return {
      
    };
  },

  async created() {
    const response = await this.$http.get("/organizacion/prueba");
  },

  methods: {
   
  }
}
</script>
