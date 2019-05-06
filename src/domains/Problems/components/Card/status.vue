<template>
  <QChip
    class="no-margin"
    square
    text-color="white"
    :color="problemStatusColor"
  > {{ problemStatusLabel }} </QChip>
</template>

<script>
import { get } from 'lodash'
import { QChip } from 'quasar'

import { PROBLEM_STATUS, STATUS_COLOR } from 'src/domains/ProblemStatus/constants'

export default {
  name: 'ProblemStatus',
  components: { QChip },
  props: {
    problem: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    problemStatus () {
      const STATUS = get(this.problem, 'problem_status', '')
      return STATUS
    },
    problemStatusLabel () {
      return PROBLEM_STATUS[this.problemStatus].label || ''
    },
    problemStatusColor () {
      return STATUS_COLOR[this.problemStatus]
    }
  }
}
</script>

<style>

</style>
