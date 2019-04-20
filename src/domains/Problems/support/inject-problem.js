import { get } from 'lodash'
import injectUser from 'src/domains/User/mixins/inject-user'

export default {
  mixins: [ injectUser ],
  props: {
    problem: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    problemUserUid () {
      return get(this.problem, 'user_uid', '')
    },
    isCardFromUser () {
      return this.userUid === this.problemUserUid
    },
    canEditProblem () {
      return this.isCardFromUser || this.isAdmin
    }
  }
}
