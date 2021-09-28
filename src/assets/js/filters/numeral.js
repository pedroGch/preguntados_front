import numeral from 'numeral'
import 'numeral/locales/es'

numeral.locale('es')

const numeralFilter = (value, format, fallback = '') => {
  try {
    return numeral(value).format(format)
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(error)
    }

    return fallback
  }
}

export default numeralFilter
