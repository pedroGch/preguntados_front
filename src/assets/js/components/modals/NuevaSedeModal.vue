<template>
  <div id="nuevaSedeModal" class="modal">
    <div class="modal-content">
        <div>
            <div class="section" style="padding: 20px 20px 20px 20px"> <i class="material-icons medium left cyan-text text-darken-1 ">assignment_ind</i>
              <h5 style="margin-top: 12px;">Agregar Sede, Filial, Anexo</h5>
              <br>
              <div class="row">
                <div class="col s12 m12">
                  <form id="nuevo_solicitante">
                    <div class="row">
                      <div class="col s12 m6 l6">
                        <p>
                            <label>
                                <input name="group1" type="radio" checked />
                                <span>Sede</span>
                            </label>

                            <label>
                                <input name="group1" type="radio" />
                                <span>Filial</span>
                            </label>

                            <label>
                                <input name="group1" type="radio" />
                                <span>Anexo</span>
                            </label>
                        </p>
                    </div>
                      <div class="col s12 m6 l6">
                        <p>
                          <label v-for="sedeTipo in sedesTipo" :key="sedeTipo.sedeTipoId">
                            <input 
                              type="radio"
                              :value="sedeTipo.sedeTipoId"
                              v-model="form.sedeTipoId"/>
                            <span>{{sedeTipo.descrip}}</span>
                          </label>
                        </p>
                      </div>
                      <div class="col s12 m6 l6">
                        <input id="nombreSede" type="text" name="nombreSede" v-model="form.nombreSede">
                        <label for="nombreSede" >Nombre de La sede, filial, anexo</label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="input-field col s12 m6 l6">
                        <input id="calle" type="text" name="calle" v-model="form.calle">
                        <label for="calle" >Calle</label>
                      </div>
                      <div class="input-field col s12 m6 l6">
                        <input id="nro_altura" type="text" name="nro_altura" v-model="form.numero">
                        <label for="nro_altura" >Nro</label>
                      </div>
                      <div class="input-field col s12 m6 l6">
                        <input id="piso" type="text" name="piso" v-model="form.piso">
                        <label for="piso" >Piso</label>
                      </div>
                      <div class="input-field col s12 m6 l6">
                        <input id="depto" type="text" name="depto" v-model="form.dpto">
                        <label for="depto" >Dpto.</label>
                      </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12 m4 l4">
                      <input id="casa" type="text" name="casa" v-model="form.casa">
                      <label for="casa" >Casa</label>
                    </div>
                    <div class="input-field col s12 m4 l4">
                        <input id="manzana" type="text" name="manzana" v-model="form.manzana">
                        <label for="manzana" >Manzana</label>
                    </div>
                    <div class="input-field col s12 m4 l4">
                        <input id="barrio" type="text" name="barrio" v-model="form.barrio">
                        <label for="barrio" >Barrio</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12 m4 l4">
                        <input id="cp" type="text" name="cp" v-model="form.codPostal">
                        <label for="cp" >Codigo Postal.</label>
                    </div>
                    <div class="input-field col s12 m4 l4">
                        <input id="tel" type="text" name="tel" v-model="form.telefono">
                        <label for="tel" >Tel.</label>
                    </div>
                    <div class="input-field col s12 m4 l4">
                        <input id="cel" type="text" name="cel" v-model="form.celular">
                        <label for="cel" >Cel.</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col s12 m4">
                      <div class="input-field ">
                        <select
                          class="browser-default"
                          v-model="form.indec_distrito_id"
                          @change="getLocalidadesByMunicipio()"    
                        >

                          <option :value="null" disabled selected>Municipio</option>

                          <option
                              v-for="municipio in municipios" 
                              :value="municipio.indec_distrito_id"
                              :key="municipio.indec_distrito_id"
                          >{{municipio.nombre}}</option>
                            
                        </select>
                      </div>
                    </div>

                    <div class="col s12 m4 l4">
                      <div class="input-field ">
                        <select 
                          class="browser-default"
                          v-model="form.indec_localidad_id"
                          >

                              <option :value="null" disabled selected>Localidad</option>
                              
                              <option
                                  v-for="localidad in localidades" 
                                  :value="localidad.indec_localidad_id"
                                  :key="localidad.indec_localidad_id"
                              >{{localidad.nombre}}</option>

                        </select>
                      </div>
                    </div>  
                    <div class="col s12 m4">
                      <div class="input-field ">
                          <select>
                              <option value="" disabled selected>Partido</option>
                              <option value="1">Partido 1</option>
                              <option value="2">Partido 2</option>
                              <option value="3">Partido 2</option>
                          </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col s12 m12 l12">

                        <p>
                            <label>
                                <input name="group2" type="radio" checked />
                                <span>Alquilado</span>
                            </label>

                            <label>
                                <input name="group2" type="radio" />
                                <span>Cedido</span>
                            </label>

                            <label>
                                <input name="group2" type="radio" />
                                <span>Propio</span>
                            </label>
                            <label>
                                <input name="group2" type="radio" />
                                <span>Particular</span>
                            </label>
                        </p>
                    </div>
                  </div>
                    <div class="row">
                      <div class="col s12 m12 l12">
                        <p>
                          <label 
                            v-for="sedeOcupacionForma in sedeOcupacionFormas" 
                            :key="sedeOcupacionForma.sedeOcupacionFormaId"
                          >
                            <input 
                              type="radio"
                              :value="sedeOcupacionForma.sedeOcupacionFormaId"
                              v-model="form.sedeOcupacionFormaId"/>
                            <span>{{sedeOcupacionForma.descrip}}</span>
                          </label>
                        </p>     
                      </div>
                    </div>

                    <div class="row">
                        <br>
                        <div class="col s12 center">
                            <a class="waves-effect waves-light btn cyan darken-1" @click="agregarSede()">Agregar<i class="material-icons right">add</i></a>
                        </div>
                    </div>
                  </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nuevaSedeModal',
  props: [
    'municipios'
  ],
  data() {
    return {
      form: {
        sedeTipoId: null,
        nombreSede: null,
      	calle: null, 
        numero: null,
        piso: null,
        dpto: null,
        casa: null,
        manzana: null,
        barrio: null,
        telefono: null,
        celular: null,
        codPostal: null,
        indec_distrito_id: null,
        indec_localidad_id: null,
        sedeOcupacionFormaId: null
      },
      localidades: [],
      sedesTipo: [],
      sedeOcupacionFormas: []
    }
  },

  created() {
    this.getTipoOrganizacion()
    this.getFormaOcupacion()
  },

  methods: {

    async getTipoOrganizacion() {
      const response = await this.$http.get('/sedeTipo/')
      this.sedesTipo = response.data
    },

    async getFormaOcupacion() {
      const response = await this.$http.get('/sedeOcupacionForma/')
      this.sedeOcupacionFormas = response.data
    },

    async getLocalidadesByMunicipio() {
      const response = await this.$http.get('/indec/localidades?distritoId=' + this.form.indec_distrito_id)
      this.localidades = response.data
      this.form.indec_localidad_id = null
    },

    agregarSede() {
      this.$emit('seAgregaOtraSede', this.form)
      // this.limpiarDatos()
      this.close()
    },

    close() {
      $('#nuevaSedeModal').modal('close')
    },

    limpiarDatos() {
      this.form.sedeTipoId = null
      this.form.nombreSede = null
      this.form.calle = null 
      this.form.numero = null
      this.form.piso = null
      this.form.dpto = null
      this.form.casa = null
      this.form.manzana = null
      this.form.barrio = null
      this.form.telefono = null
      this.form.celular = null
      this.form.codPostal = null
      this.form.indec_distrito_id = null
      this.form.indec_localidad_id = null
      this.form.sedeOcupacionFormaId = null
    }

  }
  
}
</script>