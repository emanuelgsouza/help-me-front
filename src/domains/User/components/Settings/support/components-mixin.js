import { QInput, QForm } from 'quasar'

export default {
  components: { QInput, QForm },
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
