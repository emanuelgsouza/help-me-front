import { mapGetters } from 'vuex'

const GETTERS = [
  'problemsStatuses'
]

export default {
  computed: {
    ...mapGetters('application', GETTERS),
    problemsStatusesOptions () {
      return this.problemsStatuses.map(status => {
        return {
          label: status.label,
          value: status.value
        }
      })
    }
  }
}
