import { mapGetters } from 'vuex'

const GETTERS = [
  'problemsStatuses'
]

export default {
  computed: {
    ...mapGetters('application', GETTERS),
    problemsStatusesOptions () {
      const status = this.problemsStatuses.map(status => {
        return {
          label: status.name,
          value: status.id
        }
      })
      status.push({
        label: 'Nenhum filtro',
        value: 'Nenhum filtro'
      })

      return status
    }
  }
}
