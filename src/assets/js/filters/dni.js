import numeralFilter from './numeral'

export default (value, fallback = '') => {
  return value ? numeralFilter(value, '0,000,000') : fallback
}
