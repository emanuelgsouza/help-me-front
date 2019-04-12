<template>
  <QPage padding>
    <p class="text-h5"> Conheça alguns dos problemas </p>

    <div class="row q-col-gutter-sm">
      <div class="col-4 col-md-4 col-xs-12" v-for="(problem, key) in problems" :key="key">
        <ProblemCard :problem="problem" />
      </div>
    </div>

    <AppLoading :loading="loading" />
  </QPage>
</template>

<script>
import ProblemCard from 'src/domains/Problems/components/Card'
import getProblems from 'src/services/firebase/database/get-problems'
import AppLoading from 'src/components/Loading'

export default {
  name: 'ProblemsListPage',
  components: {
    ProblemCard,
    AppLoading
  },
  data: () => ({
    problems: [],
    loading: false
  }),
  mounted () {
    this.loading = true

    getProblems()
      .then(problems => {
        this.loading = false
        this.problems = [ ...problems ]
      })
  }
}
</script>

<style>

</style>
