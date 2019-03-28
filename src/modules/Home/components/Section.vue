<template>
  <section class="home_section flex column flex-center">
    <article>
      <p class="text-center text-body1"> O projeto Help-Me! vem para aproximar a comunidade, com seus problemas, da Universidade, com suas soluções. O objetivo é propor problemas para que os alunos dos cursos de tecnologia possam se engajar em solucioná-los, por meio da transformação de ideias em soluções. Venha conhecer nosso repositório de problemas com suas soluções! </p>

    </article>
    <div class="button-container">
      <QBtn
        class="full-width"
        color="primary"
        label="Conheça nosso repositório" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSection'
}
</script>

<style>
.home_section {
  min-height: 50vh;
}

.home_section article {
  width: 100%;
  max-width: 600px;
}

.button-container {
  width: 100%;
  max-width: 400px;
}
</style>
