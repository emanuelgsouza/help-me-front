<template>
  <QPage padding>
    <div class="row q-mb-md">
      <div
        class="col-xs-12"
        :class="hasUser ? 'col-sm-6 col-md-8' : null"
      >
        <p class="text-h5"> {{ title }} </p>
      </div>

      <div
        v-if="showFilters"
        class="col-xs-12 col-sm-6 col-md-4 row q-col-gutter-xs justify-end"
      >
        <div class="col-xs-12 col-sm-6 col-md-6">
          <ProblemStatusSelect
            label="Filtre por status"
            v-model="problemStatusOption"
          />
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6">
          <QSelect
            emit-value
            map-options
            label="Filtro"
            v-model="filterOption"
            :options="filterOptions"
          />
        </div>
      </div>
    </div>

    <div class="row q-col-gutter-sm">
      <div
        class="col-xs-12 col-sm-6 col-md-4"
        v-for="(problem, key) in problems"
        :key="key"
      >
        <ProblemCard
          :problem="problem"
          @refetch="loadProblems"
        />
      </div>
    </div>

    <div
      v-if="!hasProblems && !loading"
      class="q-my-md q-pa-md bg-orange text-white text-center"
    >
      <p class="no-margin text-body1"> Não há problemas para exibir </p>
    </div>

    <AppLoading :loading="loading" />
  </QPage>
</template>

<script>
import { QSelect } from 'quasar'
import { isEmpty } from 'lodash'
import ProblemCard from 'src/domains/Problems/components/Card'
import getProblems from 'src/services/firebase/database/get-problems'
import AppLoading from 'src/components/Loading'
import injectUserMixin from 'src/domains/User/mixins/inject-user'
import { getFilterOptions, FILTER_OPTIONS } from 'src/domains/Problems/constants'
import ProblemStatusSelect from 'src/domains/ProblemStatus/components/ProblemStatusSelect'

export default {
  name: 'ProblemsListPage',
  mixins: [ injectUserMixin ],
  components: {
    QSelect,
    AppLoading,
    ProblemCard,
    ProblemStatusSelect
  },
  data: () => ({
    problems: [],
    loading: false,
    filterOption: FILTER_OPTIONS.NOTHING,
    problemStatusOption: FILTER_OPTIONS.NOTHING,
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
    },
    inRecentlyRoute () {
      return this.$route.name === 'dashboard.problems.recently'
    },
    showFilters () {
      return !this.inRecentlyRoute && this.hasUser
    },
    hasProblems () {
      return !isEmpty(this.problems)
    },
    title () {
      if (this.inRecentlyRoute) {
        return 'Veja os problemas recentemente criados'
      }

      if (this.hasUser) {
        return 'Meu problemas'
      }

      return 'Conheça os problemas na nossa plataforma'
    },
    optionsProblem () {
      if (this.inRecentlyRoute) {
        return {
          recently: true,
          status: this.problemStatusOption
        }
      }

      const options = {
        userUid: this.userUid
      }

      if (this.isNothing) {
        options['filter'] = FILTER_OPTIONS.NOTHING
        options['status'] = this.problemStatusOption
        return options
      }

      if (this.withoutSolution) {
        options['filter'] = FILTER_OPTIONS.WITHOUT_SOLUTION
        options['status'] = this.problemStatusOption
        return options
      }

      options['filter'] = FILTER_OPTIONS.MY_PROBLEMS
      options['status'] = this.problemStatusOption
      return options
    }
  },
  watch: {
    filterOption: 'loadProblems',
    problemStatusOption: 'loadProblems',
    hasUser: 'fillFilter',
    inRecentlyRoute: 'loadProblems'
  },
  methods: {
    loadProblems () {
      this.loading = true

      return getProblems(this.optionsProblem).then(this.finish)
    },
    finish (problems) {
      this.loading = false
      this.problems = [ ...problems ]
    },
    fillFilter (hasUser) {
      this.filterOption = this.$options.data().filterOption
      this.filterOptions = Object.values(getFilterOptions(hasUser))

      this.loadProblems()
    }
  },
  mounted () {
    this.fillFilter(this.hasUser)

    this.$nextTick(() => {
      this.loadProblems()
    })

    this.$root.$on('load:problems', this.loadProblems)
  }
}
</script>

<style>

</style>
