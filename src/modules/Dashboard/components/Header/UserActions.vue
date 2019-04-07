<template>
  <div>
    <QBtn
      v-if="isUserLoading"
      flat
      label="Loading usuário" />

    <QBtn
      v-if="!hasUser && !isUserLoading"
      flat
      label="Login"
      @click="login" />

    <QBtnDropdown
      v-if="hasUser && !isUserLoading"
      flat
      :label="username">

      <QList>
        <QItem clickable v-close-popup @click="logout">
          <QItemSection>
            <QItemLabel> Sair </QItemLabel>
          </QItemSection>
        </QItem>
      </QList>

    </QBtnDropdown>
  </div>
</template>

<script>
import {
  QBtnDropdown,
  QList,
  QItem,
  QItemSection,
  // QIcon,
  QItemLabel
} from 'quasar'
import { loginWithGoogle, logout } from 'src/services/firebase/auth'
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderUserActions',
  components: {
    QBtnDropdown,
    QList,
    QItem,
    QItemSection,
    // QIcon,
    QItemLabel
  },
  computed: {
    ...mapGetters('auth', [ 'hasUser', 'username', 'isUserLoading' ])
  },
  methods: {
    login () {
      loginWithGoogle()
    },
    logout () {
      logout()
    }
  }
}
</script>

<style>

</style>
