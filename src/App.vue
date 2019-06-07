<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import injectUser from 'src/domains/User/mixins/inject-user'

export default {
  name: 'App',
  mixins: [ injectUser ],
  watch: {
    user: 'checkUserInformation',
    loadingUser: 'updateLoadingStatus'
  },
  computed: {
    ...mapState('auth', ['wasLogin', 'loadingUser'])
  },
  methods: {
    checkUserInformation (user) {
      if (!user) {
        return
      }

      if (user.is_first_login) {
        this.$router.push({
          name: 'dashboard.user.settings'
        })
      }
    },
    updateLoadingStatus (val) {
      if (val) {
        return this.showLoadingToUser()
      }

      this.hideLoadingToUser()
    },
    showLoadingToUser () {
      return this.$q.loading.show({
        message: 'Carregando os dados da aplicação'
      })
    },
    hideLoadingToUser () {
      return this.$q.loading.hide()
    }
  },
  mounted () {
    this.updateLoadingStatus(this.loadingUser)
  },
  created () {
    document.addEventListener('sw:update', () => {
      // @TODO translate
      const reload = () => document.location.reload(true)
      this.$q.dialog({
        title: 'Atualização disponível',
        message: 'Uma versão mais atualizada já está disponível, clique em Ok para atualizar',
        position: 'top',
        cancel: true
      })
        .onOk(reload)
        .onCancel(_ => {
          console.log('Evento cancelado. Atualização sairá no próximo refresh de página')
        })
    })
  }
}
</script>

<style>
</style>
