<template>
    <div>
        <aside
            class="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light navbar-full sidenav-active-rounded"
        >
            <div class="brand-sidebar">
                <h1 class="logo-wrapper">
                    <router-link class="brand-logo" to="/">
                        <img
                            src="images/logo/logo_gba.svg"
                            class="hide-on-med-and-down"
                            alt="Logo Provincia"
                        />
                        <img
                            src="images/logo/logo_gba.svg"
                            class="show-on-medium-and-down hide-on-med-and-up"
                            style="
                                margin-left: 250px;
                                height: 55px;
                                margin-top: -15px;
                            "
                            alt="Logo Provincia"
                        />
                    </router-link>
                    <a class="navbar-toggler" href="#"
                        ><i class="material-icons">radio_button_checked</i></a
                    >
                </h1>
            </div>
            <ul
                class="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow"
                id="slide-out"
                data-menu="menu-navigation"
                data-collapsible="menu-accordion"
            >
                <li class="navigation-header-1 grey gba">
                    <a
                        class="navigation-header-text text-large tooltipped"
                        style="margin-bottom: -20px"
                        data-position="right" :data-tooltip="nombreCompleto(user.nombres , user.apellidos)" 
                        >{{ user.nombres }} {{ user.apellidos }}</a
                    >
                    <a class="navigation-header-text">DNI {{ user.documento }}</a>
                </li>
                <li class="bold">
                    <router-link
                        :to="{ name: 'Inicio' }"
                        class=""
                        ><i class="material-icons">home</i>INICIO</router-link
                    >
                </li>
                <div class="divider"></div>
                <li class="bold">
                    <router-link
                        :to="{ name: 'MisDatos' }"
                        class=""
                        ><i class="material-icons">account_box</i>Mis Datos</router-link
                    >
                </li>
                <div class="divider"></div>
                <li class="bold cyan lighten-5">
                    <a
                        @click="$events.$emit('logout')"
                        class=""
                        ><i class="material-icons">keyboard_tab</i>CERRAR
                        SESIÓN</a
                    >
                </li>
            </ul>
            <div class="navigation-background"></div>
            <a
                class="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium  waves-light hide-on-large-only"
                href="#"
                data-target="slide-out"
                ><i class="material-icons">menu</i></a
            >
        </aside>
    </div>
</template>

<script>
export default {
    props: {
        user: { type: Object, required: true },
    },
    methods: {
    nombreCompleto(nombre, apellido){
      return `${nombre.toUpperCase()} ${apellido.toUpperCase()}`
    }
  },
};
</script>
