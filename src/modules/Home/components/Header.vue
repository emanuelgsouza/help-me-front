<template>
  <header class="home_hero bg-primary flex flex-center column">
    <img src="~assets/logo.svg" alt="Unigranrio Logo">

    <p class="description q-my-lg q-pa-md text-h6 text-grey-1 text-center">
      O projeto Help-Me! vem para aproximar a comunidade, com seus problemas, da Universidade, com suas soluções. O objetivo é propor problemas para que os alunos dos cursos de tecnologia possam se engajar em solucioná-los, por meio da transformação de ideias em soluções. Venha conhecer nosso repositório de problemas com suas soluções!
    </p>

    <div class="button-container">
      <QBtn
        class="full-width"
        label="Help-Me!"
        color="grey-1"
        text-color="primary"
        size="lg" />
    </div>
  </header>
</template>

<script>
import { QBtn } from 'quasar'

export default {
  name: 'HomeHeader',
  components: {
    QBtn
  }
}
</script>

<style>
.home_hero {
  width: 100%;
  min-height: 100vh;
}

.description {
  max-width: 600px;
}

.button-container {
  width: 100%;
  max-width: 300px;
}
</style>
