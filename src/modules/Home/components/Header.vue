<template>
  <header
    class="home_hero bg-primary q-py-md flex flex-center column"
  >
    <figure>
      <img src="http://www.unigranrio.com.br/_images/icon/logo_branca-rodape.png" alt="Unigranrio Logo">
    </figure>

    <p class="description q-my-lg q-pa-md text-h6 text-grey-1 text-center">
      O projeto Help-Me! vem para aproximar a comunidade, com seus problemas, da Universidade, com suas soluções. O objetivo é propor problemas para que os alunos dos cursos de tecnologia possam se engajar em solucioná-los, por meio da transformação de ideias em soluções. Venha conhecer nosso repositório de problemas com suas soluções!
    </p>

    <div class="button-container">
      <QBtnGroup spread>
        <QBtn
          class="full-width"
          label="Help-Me!"
          color="orange"
          size="lg"
          @click="openCreateProblem"
        />

        <QBtn
          class="full-width"
          label="Problemas"
          color="grey-1"
          text-color="primary"
          size="lg"
          :to="{ 'name': 'dashboard.index' }"
        />
      </QBtnGroup>
    </div>

    <CreateProblemModal ref="createProblem" />

    <AppVersion />
  </header>
</template>

<script>
import { QBtn, QBtnGroup } from 'quasar'
import AppVersion from 'src/components/Version'
import CreateProblemModal from 'src/domains/Problems/components/Create/adapter/Modal'

export default {
  name: 'HomeHeader',
  components: {
    QBtn,
    QBtnGroup,
    AppVersion,
    CreateProblemModal
  },
  methods: {
    openCreateProblem () {
      this.$refs.createProblem.open()
    }
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
  max-width: 600px;
  padding: 10px;
}
</style>
