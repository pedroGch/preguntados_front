<template>
  <div class="row">
    <div class="col s12 m8 l10 centrado">
      <div class="card-panel">
        <h4 class="header2">Crear Cuestionarios</h4>
        <div class="row  ml-13">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12 l12 m12">
                <input id="first_name" type="text" placeholder="Ingrese su pregunta" v-model="pregunta_descrip">
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 l10 m10">
                <input id="first_name" type="text" placeholder="Agregar una respuesta" v-model="respuesta_descrip">
              </div>
              <div class="col s12 m2 l2 input-field"> <a class="modal-trigger btn cyan darken-1 texto-boton" href="#" @click="agregarRespuesta()" >Agregar<i class="material-icons right">add</i> </a> </div>
            </div>
            <div class="row">
              <div class="col s12">
                <ul>
                  <li v-for="(pregunta, i ) in preguntas">
                    <input class="col s12 l10 m10" type="text" v-model="pregunta.pregunta" :disabled="!pregunta.editable" placeholder="Agregar una respuesta"> 
                  
                    <a class="btn-floating btn-flat  lighten-1 " :class="[pregunta.estado ? 'green': 'grey']" title="marcar como correcta" href="#" @click="marcarComoCorrecta(i)">
                      <i class="material-icons"> done</i>
                    </a>
                    <a class="btn-floating btn-flat darken-1 " :class="[pregunta.editable ? 'orange' : 'blue']" :title="pregunta.editable ? 'Guardar edición' : 'editar respuesta'" href="#" @click="editarRespuesta(pregunta)">
                      <i class="material-icons"> {{pregunta.editable ? 'save':'mode_edit'}}</i>
                    </a>
                    <a class="btn-floating btn-flat red darken-1 " title="eliminar pregunta" href="#" @click="eliminarRespuesta(i)">
                      <i class="material-icons"> delete_forever</i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="input-field col s12">
                <button class="btn cyan waves-effect waves-light right" type="submit" name="action" @click="guardarCuentionario()" >Guardar
                  <i class="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'AltaPreguntaForm',
  components:{

  },
  props: {

  },
  data(){
    return{
      pregunta_descrip: "",
      respuesta_descrip:"",
      preguntas: []
    }
    
  },
  methods:{
    agregarRespuesta(){
      if (this.respuesta_descrip != ""){
        this.preguntas.push({"pregunta": this.respuesta_descrip, "estado": false, "editable":false})
        this.respuesta_descrip = ""
      }else{
        alert("no se puede agregar elementos vacios")
      }
      
    },
    eliminarRespuesta(i){
      this.preguntas.splice(i,1)
    },
    editarRespuesta(pregunta){
      if (pregunta.pregunta != ""){
        pregunta.editable = !pregunta.editable
      }else{
        alert("no se puede agregar elementos vacios")
      }
      
    },
    marcarComoCorrecta(i){
      let respuestaAnterior =  this.preguntas.find(p => p.estado == true) 
      if (respuestaAnterior != undefined){
        respuestaAnterior.estado = false;
        this.preguntas[respuestaAnterior] = respuestaAnterior
      }
      let pregunta = this.preguntas[i]
      pregunta.estado = true
      this.preguntas[i] = pregunta
      
    },
    guardarCuentionario(){
      //validar que el campo pregunta tenga al menos un texto
      //validar que de las respuestas solo una sea verdadera
      let respuestaCorrecta =  this.preguntas.find(p => p.estado == true) 
      let enviarPregunta = {
        "nombre": this.pregunta_descrip,
        "materia": "IBD",
        "tema": "teoria 1",
        "respuesta" : respuestaCorrecta.pregunta
      }
      axios.post("localhost:5000/api/v1/preguntas/altaPregunta",enviarPregunta).then((result) => {
        console.log(result)
      })
      //enviar por axios la pregunta

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centrado{
  position: absolute !important;
  top: 0;
  left: 0!important;
  right: 0!important;
  bottom: 0!important;
  margin: auto!important;
}
.texto-boton{
  font-size: 15px;
  color: #fff !important;
  text-decoration: none !important;
}

.row ul li{
  margin-bottom: 15px;
}

.row ul li a{
  margin-left: 5px;
}

.row form{
  width: 70% !important;
}
.ml-13{
  margin-left: 20.5% !important;
}
.desabilitar{
  filter: grayscale(100%);
}
</style>
