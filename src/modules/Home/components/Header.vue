<template>
  <header class="hero bg-primary flex flex-center column">
    <img src="~assets/logo.svg" alt="Unigranrio Logo">

    <p class="description q-my-lg q-pa-md text-h6 text-grey-1 text-center">
      Uma oportunidade de ver seu problema resolvido, através do poder transformador da tecnologia
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
.hero {
  width: 100%;
  min-height: 70vh;
}

.description {
  max-width: 600px;
}

.button-container {
  width: 100%;
  max-width: 300px;
}
</style>
