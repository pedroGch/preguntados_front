import { validationsMixin } from '../validations/validations.mixin'
import { profileValidationMixin } from '../validations/profile-validation.mixin'

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.mixin(validationsMixin)
    Vue.mixin(profileValidationMixin)
  },
}
