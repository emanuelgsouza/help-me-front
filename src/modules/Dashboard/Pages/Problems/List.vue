<template>
  <QPage padding>
    <div class="row q-mb-md">
      <div class="col-xs-12 col-sm-6 col-md-8">
        <p class="text-h5"> Conheça os problemas na nossa plataforma </p>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 row gutter-xs">
        <!-- <div class="col-xs-12 col-sm-6 col-md-6">
          <QSelect
            label="Filtre por um tipo"
            v-model="problemStatusOption"
            :options="problemsStatusesOptions" />
        </div> -->

        <div class="col-xs-12 col-sm-6 col-md-6">
          <QSelect
            label="Filtro"
            v-model="filterOption"
            :options="filterOptions" />
        </div>
      </div>
    </div>

    <div class="row q-col-gutter-sm">
      <div class="col-xs-12 col-sm-6 col-md-4" v-for="(problem, key) in problems" :key="key">
        <ProblemCard :problem="problem" />
      </div>
    </div>

    <AppLoading :loading="loading" />
  </QPage>
</template>

<script>
import { QSelect } from 'quasar'
import ProblemCard from 'src/domains/Problems/components/Card'
import getProblems from 'src/services/firebase/database/get-problems'
import AppLoading from 'src/components/Loading'
import injectUserMixin from 'src/domains/User/mixins/inject-user'
import injectApplication from 'src/domains/Application/mixins/inject-application'
import { getFilterOptions, FILTER_OPTIONS } from 'src/domains/Problems/constants'

export default {
  name: 'ProblemsListPage',
  mixins: [ injectUserMixin, injectApplication ],
  components: {
    QSelect,
    AppLoading,
    ProblemCard
  },
  data: () => ({
    problems: [],
    loading: false,
    filterOption: FILTER_OPTIONS.NOTHING,
    problemStatusOption: null,
    filterOptions: Object.values(FILTER_OPTIONS)
  }),
  computed: {
    isNothing () {
      return this.filterOption === FILTER_OPTIONS.NOTHING
    },
    withoutSolution () {
      return this.filterOption === FILTER_OPTIONS.WITHOUT_SOLUTION
    },
    myProblems () {
      return this.filterOption === FILTER_OPTIONS.MY_PROBLEMS
    }
  },
  watch: {
    filterOption: 'loadProblems',
    hasUser: 'fillFilter'
  },
  methods: {
    loadProblems () {
      this.loading = true

      if (this.isNothing) {
        const options = { filter: FILTER_OPTIONS.NOTHING }
        return getProblems(options).then(this.finish)
      }

      if (this.withoutSolution) {
        const options = { filter: FILTER_OPTIONS.WITHOUT_SOLUTION }
        return getProblems(options).then(this.finish)
      }

      const options = {
        filter: FILTER_OPTIONS.MY_PROBLEMS,
        userUid: this.userUid
      }
      return getProblems(options).then(this.finish)
    },
    finish (problems) {
      this.loading = false
      this.problems = [ ...problems ]
    },
    fillFilter (hasUser) {
      this.filterOption = this.$options.data().filterOption
      this.filterOptions = Object.values(getFilterOptions(hasUser))
    }
  },
  mounted () {
    this.loadProblems()

    this.fillFilter(this.hasUser)
  }
}
</script>

<style>

</style>
