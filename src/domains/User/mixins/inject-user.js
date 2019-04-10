import { mapGetters, mapState } from 'vuex'
import { get } from 'lodash'

export default {
  computed: {
    ...mapGetters('auth', [ 'hasUser', 'username', 'isUserLoading', 'userUid' ]),
    ...mapState('auth', [ 'user' ])
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
