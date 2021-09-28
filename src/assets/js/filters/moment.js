import moment from 'moment'

const momentFilter = (value, format) => moment(value).format(format)

export default momentFilter
