<template>
  <QBtn
    label="Login"
    color="negative"
    icon-right="fab fa-google"
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
