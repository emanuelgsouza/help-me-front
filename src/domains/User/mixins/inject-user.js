import { mapGetters, mapState } from 'vuex'
import { get } from 'lodash'

export default {
  computed: {
    ...mapGetters('auth', [ 'hasUser', 'username', 'isUserLoading' ]),
    ...mapState('auth', [ 'user' ])
  },
  methods: {
    injectUserInModel () {
      this.model = {
        ...this.model,
        name: get(this.user, 'name', null),
        email: get(this.user, 'email', null),
        phone: get(this.user, 'phone', null)
      }
    }
  }
}
