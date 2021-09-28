// eslint-disable-next-line no-unused-vars
export default function install(Vue, options) {
  const events = new Vue()

  Object.defineProperty(Vue.prototype, '$events', {
    value: events,
  })

  /* eslint-disable no-console */
  if (process.env.NODE_ENV === 'development') {
    console.log('installed Event Bus globally. Use $events property on any Vue instance')
  }
  /* eslint-enable no-console */
}
