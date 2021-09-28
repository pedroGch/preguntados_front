<template>
    <div>
        <Navbar />
        <Aside :user="user" />
        <div id="main">
            <Breadcrumbs/>
            <div class="wrapper">
                <section id="content">
                    <slot></slot>
                </section>
            </div>
        </div>
        <!-- <Footer></Footer> -->
    </div>
</template>

<script>
import Navbar from "./nav/Navbar";
import Footer from "./Footer";
import Aside from "./Aside";
import Breadcrumbs from "./Breadcrumbs";

// IMPORTANTE Comente arriba el menu lateral que declaro Agus aca abajo
// el que ven ahora lo van a encontrar como Aside.vue en la carpeta components. Y se importa en el app.js

export default {
    props: {
        user: { type: Object, required: true },
    },

    components: { Navbar, Aside, Breadcrumbs, Footer },
};
</script>
