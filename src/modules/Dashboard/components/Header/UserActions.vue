<template>
  <div>
    <QBtn
      v-if="isUserLoading"
      flat
      label="Loading usuário"
    />

    <QBtn
      v-if="!hasUser && !isUserLoading"
      label="Login"
      color="negative"
      icon-right="fab fa-google"
      @click="login"
    />

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
          <QItemSection avatar>
            <QIcon name="fas fa-sign-out-alt"
          />
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
  QIcon,
  QItemLabel
} from 'quasar'
import { loginWithGoogle } from 'src/services/firebase/auth'
import injectUser from 'src/domains/User/mixins/inject-user'

export default {
  name: 'HeaderUserActions',
  mixins: [ injectUser ],
  components: {
    QBtnDropdown,
    QList,
    QItem,
    QItemSection,
    QIcon,
    QItemLabel
  },
  methods: {
    login () {
      loginWithGoogle()
    },
    logout () {
      this.$q.loading.show({
        message: 'Fazendo logout na aplicação'
      })

      const timeout = setTimeout(() => {
        this.logoutUser()
          .then(() => {
            this.$q.loading.hide()

            this.$root.$emit('load:problems')

            clearTimeout(timeout)
          })
      }, 2000)
    }
  }
}
</script>

<style>

</style>
