<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { Dialog } from 'quasar'

export default {
  name: 'App',
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
