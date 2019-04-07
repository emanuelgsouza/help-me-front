<template>
  <QPage padding>
    <h4 class="q-ma-none"> Cadastrar problema </h4>

    <CreateProblem />
  </QPage>
</template>

<script>
import CreateProblem from 'src/domains/Problems/components/Create'

export default {
  name: 'ProblemsCreatePage',
  components: { CreateProblem }
}
</script>

<style>

</style>
