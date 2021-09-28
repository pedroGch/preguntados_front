import VueRouter from 'vue-router'

import { routes } from './routes'

const router = new VueRouter({
  mode: 'history',
  routes,
});
router.afterEach((to, from) => {
  // ...
  setTimeout(function () {
    $('.datepicker').datepicker({
      autoClose: true,
      format: 'dd/mm/yyyy',
      container: 'body',
      onDraw: function () {
        // materialize select dropdown not proper working on mobile and tablets so we make it browser default select
        $('.datepicker-container').find('.datepicker-select').addClass('browser-default');
        $(".datepicker-container .select-dropdown.dropdown-trigger").remove()
      }
    });
    $("select").formSelect();
    //Init tabs
    $(".tabs").tabs();
    $('.modal').modal();
    $('.chips').chips();
    $('.chips-placeholder').chips({
      placeholder: 'Teléfonos',
      secondaryPlaceholder: 'Agregar otro',
    });
    var allCollapse = document.querySelectorAll(".collapsible");
    M.Collapsible.init(allCollapse);
    // Collapsible expandable    
    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
      accordion: false
    });


  }, 100);
  
})

export { router }
