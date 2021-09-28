const allowedSpecialKeys = [
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
  'Delete',
  'Control',
  'Alt',
  'Backspace',
]

const validationsMixin = {
  computed: {
    allowedSpecialKeys() {
      return allowedSpecialKeys
    },
  },

  methods: {
    isSpecialKey(event) {
      return this.allowedSpecialKeys.includes(event.key)
    },

    onlyText(event) {
      if (/^[^A-Za-z\s]+$/.test(event.key)) {
        event.preventDefault()
      }
    },

    onlyNumbers(event) {
      if (this.isSpecialKey(event)) {
        return
      }

      if (/^[^\d]+$/.test(event.key)) {
        event.preventDefault()
      }
    },
  },
}

export { validationsMixin }
