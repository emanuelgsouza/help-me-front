<template>
  <QBtn
    label="Entre com sua conta Google"
    color="negative"
    icon="fab fa-google"
    @click="login"
  />
</template>

<script>
import { loginWithGoogle } from 'src/services/firebase/auth'

export default {
  name: 'LogginButton',
  methods: {
    login () {
      loginWithGoogle()
    }
  }
}
</script>

<style>

</style>
