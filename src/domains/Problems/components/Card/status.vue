<template>
  <QChip
    class="no-margin"
    square
    text-color="white"
    :color="problemStatusColor"
    @click="setFilter"
  >
    {{ problemStatusLabel }}
    <QTooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
      {{ problemStatusDescription }}
    </QTooltip>
  </QChip>
</template>

<script>
import { get } from 'lodash'
import { QChip, QTooltip } from 'quasar'

import { PROBLEM_STATUS, STATUS_COLOR } from 'src/domains/ProblemStatus/constants'

export default {
  name: 'ProblemStatus',
  components: { QChip, QTooltip },
  props: {
    problem: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isProblemApproved () {
      return get(this.problem, 'approved', false)
    },
    problemStatus () {
      if (!this.isProblemApproved) {
        return 'PENDING_APPROVE'
      }

      const STATUS = get(this.problem, 'problem_status', '')
      return STATUS
    },
    problemStatusLabel () {
      return PROBLEM_STATUS[this.problemStatus].label || ''
    },
    problemStatusColor () {
      return STATUS_COLOR[this.problemStatus]
    },
    problemStatusDescription () {
      return PROBLEM_STATUS[this.problemStatus].description || ''
    }
  }
}
</script>

<style>

</style>
