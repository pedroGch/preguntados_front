<!-- <template>
  <header id="header" class="page-topbar">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <h1 class="logo-wrapper">
            <RouterLink :to="{ name: 'Home' }" class="brand-logo darken-1">
              <img src="images/logo/logo_gba.svg" alt="GBA logo" height="48" />
            </RouterLink>
          </h1>

          <ul class="right hide-on-med-and-down">
            <li>
              <a @click="$events.$emit('logout')" href="#!">Cerrar sesión</a>
            </li>
          </ul>

          <div class="titulo center hide-on-med-and-down" style="font-size:150%">
            ACOMPAÑAMIENTO DE TRAYECTORIAS Y REVINCULACIÓN PEDAGÓGICA
          </div>
        </div>
      </nav>
    </div>
  </header>
</template> -->

<template>
    <div>
        <header class="page-topbar" id="header">
            <div class="navbar navbar-fixed">
                <nav class="navbar-main navbar-color nav-collapsible sideNav-lock">
                    <div class="nav-wrapper">
                        <div class="titulo hide-on-med-and-down">PROYECTO BASE</div>
                        <ul class="navbar-list right hide-on-small-only">
                            <li><a class="waves-effect waves-block waves-light" v-on:click="">Cerrar sesión</a></li> 
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </div>
</template>
