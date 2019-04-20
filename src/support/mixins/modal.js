export default {
  methods: {
    open () {
      this.$refs.modal.open()

      this.$emit('open')
    },
    close () {
      this.$refs.modal.close()

      this.$emit('close')
    }
  }
}
