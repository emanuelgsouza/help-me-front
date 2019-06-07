<template>
  <QCard>
    <QCardSection>
      <div class="row items-center no-wrap">
        <div class="col">
          <ProblemStatusChip
            :problem="problem"
          />
        </div>

        <div class="col-auto">
          <ProblemActions
            :problem="problem"
            v-if="showActions"
            @edit="openEditProblemModal"
            @delete="onDeleteProblem"
            @approve="onApproveProblem"
            @editStatus="openEditProblemStatusModal"
          />
        </div>
      </div>
    </QCardSection>

    <QCardSection>
      <p class="text-body1 text-italic q-my-none"> "{{ description }}" </p>
    </QCardSection>

    <QSeparator spaced />

    <QCardSection class="row justify-between">
      <SolutionModal ref="modal" :solution="suggestion" />

      <EditProblemStatus
        v-if="hasProblem"
        ref="editProblemStatus"
        :problem="problem"
        @close="onClose"
      />

      <EditProblemModal
        v-if="hasProblem"
        ref="editProblem"
        :problem="problem"
        @close="onClose"
      />

      <UserInfoModal
        ref="userInfo"
        :userUid="problemUserUid"
      />

      <QChip square color="primary" text-color="white" icon="event">
        {{ createdAt }}
      </QChip>

      <div class="row items-center">
        <QBtn
          v-if="hasSuggestion"
          class="cursor-pointer"
          icon="far fa-lightbulb"
          round
          flat
          color="orange"
          @click="openSuggestionModal">
          <QTooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
            Clique para ver a solução proposta
          </QTooltip>
        </QBtn>

        <QBtn
          v-if="isAdmin"
          class="cursor-pointer"
          icon="far fa-user"
          round
          flat
          color="primary"
          @click="openUserInformation">
          <QTooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
            Clique para ver informações do usuário que criou
          </QTooltip>
        </QBtn>
      </div>
    </QCardSection>
  </QCard>
</template>

<script>
import { QTooltip, QCard, QCardSection, QSeparator, QChip } from 'quasar'
import { get, isEmpty, toNumber } from 'lodash'
import moment from 'moment'

import ProblemActions from './actions'
import ProblemStatusChip from './status'
import SolutionModal from './solution'
import EditProblemModal from './edit'
import injectUser from 'src/domains/User/mixins/inject-user'
import EditProblemStatus from './edit-status'
import UserInfoModal from 'src/domains/User/components/UserInfo/adapter/Modal'
import { deleteProblem, approveProblem } from 'src/services/firebase/database'

export default {
  name: 'ProblemCard',
  mixins: [ injectUser ],
  components: {
    QCard,
    QChip,
    QTooltip,
    QSeparator,
    QCardSection,
    SolutionModal,
    UserInfoModal,
    ProblemActions,
    EditProblemModal,
    EditProblemStatus,
    ProblemStatusChip
  },
  props: {
    problem: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    problemUid () {
      return get(this.problem, 'uid', '')
    },
    description () {
      return get(this.problem, 'description', '')
    },
    suggestion () {
      return get(this.problem, 'suggestion', '')
    },
    hasSuggestion () {
      return !isEmpty(this.suggestion)
    },
    createdAt () {
      return moment(toNumber(get(this.problem, 'created'))).format('DD/MM/YYYY HH:mm:ss')
    },
    problemUserUid () {
      return get(this.problem, 'user_uid', '')
    },
    isCardFromUser () {
      return this.userUid === this.problemUserUid
    },
    canEditProblem () {
      return this.isCardFromUser || this.isAdmin
    },
    showActions () {
      return this.canEditProblem
    },
    hasProblem () {
      return !isEmpty(this.problem)
    }
  },
  methods: {
    openSuggestionModal () {
      this.$refs.modal.open()
    },
    openEditProblemModal () {
      this.$refs.editProblem.open()
    },
    openEditProblemStatusModal () {
      this.$refs.editProblemStatus.open()
    },
    onClose () {
      this.$emit('refetch')
    },
    openUserInformation () {
      this.$refs.userInfo.open()
    },
    onApproveProblem () {
      this.$q.dialog({
        title: 'Aprovar',
        message: 'Ao aprovar este problema, ele estará disponível para visualização'
      })
        .onOk(() => {
          approveProblem(this.problemUid, this.userUid)
            .then(() => {
              this.$q.notify({
                message: 'Problema aprovado com sucesso com sucesso',
                color: 'positive'
              })

              this.onClose()
            })
        })
    },
    onDeleteProblem () {
      this.$q.dialog({
        title: 'Aviso',
        message: 'Você tem certeza que quer excluir esse problema?'
      })
        .onOk(() => {
          deleteProblem(this.problemUid, this.userUid)
            .then(() => {
              this.$q.notify({
                message: 'Problema deletado com sucesso',
                color: 'positive'
              })

              this.onClose()
            })
        })
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
