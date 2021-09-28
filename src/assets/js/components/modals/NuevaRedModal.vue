<template>
    <div id="nuevaRedSocialModal" class="modal">
        <div class="modal-content">
            <div >
                <div class="section" style="padding: 20px 20px 20px 20px">
                    <i class="material-icons medium left cyan-text text-darken-1 ">share</i>
                    <h5 style="margin-top: 12px;">Agregar Red Social</h5>
                    <br>
                    <div class="row">
                        <div class="col s12 m12">
                            <form id="nuevo_solicitante">
                                <div class="col s12 m12">
                                    <div class="input-field">
                                        <input id="nombrered" type="text" name="nombrered" v-model="form.nombre"/>
                                        <label for="nombrered">Nombre</label>
                                    </div>
                                </div>
                                <div class="col s12 m12">
                                    <div class="input-field">
                                        <input id="url_red" type="text" name="url_red" v-model="form.url"/>
                                        <label for="url_red">Dirección WEB</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <br>
                        <div class="col s12 center">
                            <a class="waves-effect waves-light btn cyan darken-1" @click.prevent="agregarRedSocial()">OK<i class="material-icons right">add</i></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'nuevaRedSocialModal',

  data() {
      return {
        form: {
            nombre: null,
            url: null
        }
      }
  },

  methods: {
    agregarRedSocial() {
        this.$emit('seAgregaRedSocial', this.form)
        // this.limpiarDatos()
        this.close()
    },
    
    close() {
        $('#nuevaRedSocialModal').modal('close')
    },

    limpiarDatos() {
        this.form.nombre = null
        this.form.url = null
    }
  }
}

</script>
