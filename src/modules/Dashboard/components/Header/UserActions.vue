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
      icon-right="fas fa-sign-in-alt"
      @click="login" />

    <QBtnDropdown
      v-if="hasUser && !isUserLoading"
      flat
      :icon="isAdmin ? 'fas fa-user-shield' : ''"
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
import injectUser from 'src/domains/User/mixins/inject-user'

export default {
  name: 'HeaderUserActions',
  mixins: [ injectUser ],
  components: {
    QBtnDropdown,
    QList,
    QItem,
    QItemSection,
    // QIcon,
    QItemLabel
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
