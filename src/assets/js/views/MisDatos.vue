<template>
<div class="container">
  <div class="section">
    <div class="row">
      <div class="col s12"> <i class="material-icons medium left cyan-text">account_circle</i>
        <h4 style="margin-top: 12px;">MIS DATOS</h4>
      </div>
    </div>
    <br>
    <div class="card">
      <div class="card-content">
        <div class="row">
          <div class="input-field col s12 m6 l5">
            <label for="nombre" class="active">Nombre</label>
            <input type="text" name="nombre" id="" disabled="" value="Juan Carlos">
          </div>
          <div class="input-field col s12 m6 l5">
            <label for="apellido" class="active">Apellido</label>
            <input type="text" name="apellido" id="" disabled="" value="García">
          </div>
          <div class="input-field col s12 m4 l2">
            <label for="dni" class="active">Número de documento</label>
            <input type="number" name="dni" id="" disabled="" value="32211345">
          </div>
        </div>
        <div class="row">
          <div class="col s12 l4">
            <div class="input-field ">
              <input id="email" type="email" class="validate">
              <label for="email">Ingresar Email (*)</label>
            </div>
          </div>
			<div class="col s12 l4">
            <div class="input-field ">
              <input id="email" type="email" class="validate">
              <label for="email">Confirmar Email (*)</label>
            </div>
          </div>
          <div class="col s12 l4">
            <div class="input-field ">
              <input id="telefono" type="text" name="telefono">
              <label for="telefono" class="">Ingresar Número de Teléfono (*)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col s12 l6">
        <label class="left">(*) Campos obligatorios</label>
      </div>
      <div class="col s12 l6"> <a href="#" class="waves-effect waves-light btn right"><i class="material-icons right">save</i>Guardar</a> </div>
    </div>
  </div>
</div>
</template>
