import moment from '../filters/moment'
import date from '../filters/date'
import numeral from '../filters/numeral'
import dni from '../filters/dni'
import apellidoNombre from '../filters/apellidoNombre'
import uppercase from '../filters/uppercase'

const filters = {
  moment,
  date,
  numeral,
  dni,
  apellidoNombre,
  uppercase,
}

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Object.keys(filters).forEach(filter => Vue.filter(filter, filters[filter]))
    Vue.prototype.$filters = Vue.options.filters
  },
}
