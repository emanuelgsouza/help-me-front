import { QInput, QForm, QOptionGroup } from 'quasar'
import WRAPPERS from 'src/components/Wrappers'
import FormGrid from 'src/components/Grid'

export default {
  components: {
    QInput,
    QForm,
    QOptionGroup,
    ...FormGrid,
    ...WRAPPERS
  },
  props: {
    model: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    onInput (path, value) {
      this.$emit('input', { path, value })
    }
  }
}
