<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <alta-pregunta-form/>
  </div>
</template>

<script>
// @ is an alias to /src
import AltaPreguntaForm from '@/components/AltaPreguntaForm.vue'

export default {
  name: 'Home',
  components: {
    AltaPreguntaForm
  }
}
</script>
