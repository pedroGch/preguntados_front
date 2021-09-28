<template>
  <div class="row">
    <div class="col s12 m8 l10 centrado">
      <div class="card-panel">
        <h4 class="header2">ALTA DE PREGUNTA</h4>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12 l12 m12">
                <input id="first_name" type="text" placeholder="Ingrese su pregunta">
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 l10 m10">
                <input id="first_name" type="text" placeholder="Agregar una respuesta">
              </div>
              <div class="col s12 m2 l2 input-field"> <a class="modal-trigger btn cyan darken-1 texto-boton" href="#" >Agregar<i class="material-icons right">add</i> </a> </div>
            </div>
            <div class="row">
              <ol>
                <li>
                  <input class="col s12 l10 m10" type="text" placeholder="Agregar una respuesta"> 
                  
                  <a class="btn-floating btn-flat green darken-1 " title="" href="#" >
                    <i class="material-icons"> done</i>
                  </a>
                  <a class="btn-floating btn-flat blue darken-1 " title="editar respuesta" href="#" >
                    <i class="material-icons"> mode_edit</i>
                  </a>
                  <a class="btn-floating btn-flat red darken-1 " title="" href="#" >
                    <i class="material-icons"> delete_forever</i>
                  </a>
                </li>
                <li>
                  <input class="col s12 l10 m10" type="text" placeholder="Agregar una respuesta"> 
                  
                  <a class="btn-floating btn-flat green darken-1 " title="" href="#" >
                    <i class="material-icons"> done</i>
                  </a>
                  <a class="btn-floating btn-flat blue darken-1 " title="editar respuesta" href="#" >
                    <i class="material-icons"> mode_edit</i>
                  </a>
                  <a class="btn-floating btn-flat red darken-1 " title="" href="#" >
                    <i class="material-icons"> delete_forever</i>
                  </a>
                </li>
                <li>
                  <input class="col s12 l10 m10" type="text" placeholder="Agregar una respuesta"> 
                  
                  <a class="btn-floating btn-flat green darken-1 " title="" href="#" >
                    <i class="material-icons"> done</i>
                  </a>
                  <a class="btn-floating btn-flat blue darken-1 " title="editar respuesta" href="#" >
                    <i class="material-icons"> mode_edit</i>
                  </a>
                  <a class="btn-floating btn-flat red darken-1 " title="" href="#" >
                    <i class="material-icons"> delete_forever</i>
                  </a>
                </li>
              </ol>
            </div>
            <div class="row">
              <div class="row">
                <div class="input-field col s12">
                  <button class="btn cyan waves-effect waves-light right" type="submit" name="action">Guardar
                    <i class="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AltaPreguntaForm',
  props: {

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

.row ol li{
  margin-bottom: 15px;
}

.row ol li a{
  margin-left: 5px;
}

.row form{
  width: 70% !important;
}
</style>
