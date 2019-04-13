import { mapGetters, mapState } from 'vuex'
import { get } from 'lodash'

const GETTERS = [
  'hasUser',
  'username',
  'isUserLoading',
  'userUid',
  'isAdmin'
]

const STATE = [ 'user' ]

export default {
  computed: {
    ...mapGetters('auth', GETTERS),
    ...mapState('auth', STATE)
  },
  methods: {
    injectUserInModel () {
      this.model = {
        ...this.model,
        name: get(this.user, 'name', ''),
        email: get(this.user, 'email', ''),
        phone: get(this.user, 'phone', '')
      }
    }
  }
}
