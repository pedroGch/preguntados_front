const profileValidationMixin = {
  methods: {
    validateProfile() {
      return Boolean(this.user?.perfilDocente?.establecimiento)
    },

    displayNoProfileMessage(onClose) {
      this.$swal({
        title: 'Debe completar su perfil',
        icon: 'error',
        showConfirmButton: true,
        text: 'Antes de continuar, debe ingresar sus datos personales.',
        onClose,
      })
    },
  },
}

export { profileValidationMixin }
