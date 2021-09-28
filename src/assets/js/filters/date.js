import moment from 'moment'

const dateFilter = (value, format = 'DD/MM/Y', fallback = '') => {
  const date = moment(value)

  return date.isValid() ? date.format(format) : fallback
}

export default dateFilter
