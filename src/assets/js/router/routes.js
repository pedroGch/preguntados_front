import Inicio from '../views/Inicio'
import MisDatos from '../views/MisDatos'


const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    props: true,
  },

  {
    path: '/misDatos',
    name: 'MisDatos',
    component: MisDatos
  },

  { path: '*', redirect: { name: 'Inicio' } },
]

export { routes }
