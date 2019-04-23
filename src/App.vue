<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { Dialog } from 'quasar'
import injectUser from 'src/domains/User/mixins/inject-user'

export default {
  name: 'App',
  mixins: [ injectUser ],
  watch: {
    user: 'checkUserInformation'
  },
  methods: {
    checkUserInformation (user) {
      if (!user) {
        return
      }

      if (user.is_first_login) {
        console.log({ user })
        this.$router.push({
          name: 'dashboard.user.settings'
        })
      }
    }
  },
  created () {
    document.addEventListener('sw:update', () => {
      // @TODO translate
      const reload = () => document.location.reload(true)
      Dialog.create({
        title: 'Update',
        message: 'Há uma atualização disponível, atualize sua página para carregá-la',
        position: 'top',
        cancel: true
      })
        .then(reload)
        .catch(_ => {
          console.log('Evento cancelado. Atualização sairá no próximo refresh de página')
        })
    })
  }
}
</script>

<style>
</style>
