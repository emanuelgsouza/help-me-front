<template>
  <QCard>
    <QCardSection>
      <p class="text-body1 text-italic q-my-none"> "{{ description }}" </p>
    </QCardSection>

    <QSeparator spaced />

    <QCardSection class="row justify-between q-pa-xs">
      <QChip square color="primary" text-color="white" icon="event">
        {{ createdAt }}
      </QChip>

      <div class="row items-center">
        <QIcon class="lightbulb cursor-pointer" name="far fa-lightbulb" size="32px" />
      </div>
    </QCardSection>
  </QCard>
</template>

<script>
import { QCard, QCardSection, QSeparator, QChip, QIcon } from 'quasar'
import { get } from 'lodash'

export default {
  name: 'ProblemCard',
  components: { QCard, QCardSection, QSeparator, QChip, QIcon },
  props: {
    problem: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    description () {
      return get(this.problem, 'description', '')
    },
    sugestion () {
      return get(this.problem, 'sugestion', '')
    },
    createdAt () {
      return get(this.problem, 'created', '')
    }
  }
}
</script>

<style>
.lightbulb {
  transition: .2s ease;
}

.lightbulb:hover {
  color: orange;
}
</style>
