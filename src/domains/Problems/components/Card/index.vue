<template>
  <QCard>
    <QCardSection>
      <p class="text-body1 text-italic q-my-none"> "{{ description }}" </p>
    </QCardSection>

    <QSeparator spaced />

    <QCardSection class="row justify-between q-pa-xs">
      <SolutionModal ref="modal" :solution="suggestion" />

      <QChip square color="primary" text-color="white" icon="event">
        {{ createdAt }}
      </QChip>

      <div class="row items-center">
        <QIcon
          v-if="isCardFromUser"
          name="fas fa-user-alt"
          size="32px">
          <QTooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
            Problema reportado por mim
          </QTooltip>
        </QIcon>

        <QIcon
          v-if="hasSuggestion"
          class="q-ml-md lightbulb cursor-pointer"
          name="far fa-lightbulb"
          size="32px"
          @click="openSuggestionModal" />
      </div>
    </QCardSection>
  </QCard>
</template>

<script>
import { QTooltip, QCard, QCardSection, QSeparator, QChip, QIcon } from 'quasar'
import { get, isEmpty } from 'lodash'
import SolutionModal from './solution'
import injectUser from 'src/domains/User/mixins/inject-user'
import moment from 'moment'

export default {
  name: 'ProblemCard',
  mixins: [ injectUser ],
  components: { QTooltip, QCard, QCardSection, QSeparator, QChip, QIcon, SolutionModal },
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
    suggestion () {
      return get(this.problem, 'sugestion', '')
    },
    hasSuggestion () {
      return !isEmpty(this.suggestion)
    },
    createdAt () {
      return moment(get(this.problem, 'created', '')).format('MM-DD-YYYY HH:mm:ss')
    },
    problemUserUid () {
      return get(this.problem, 'user_uid', '')
    },
    isCardFromUser () {
      return this.userUid === this.problemUserUid
    }
  },
  methods: {
    openSuggestionModal () {
      this.$refs.modal.open()
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
