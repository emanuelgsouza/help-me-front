<template>
  <QBtn color="grey-7" round flat icon="more_vert">
    <QMenu auto-close anchor="bottom left" self="top left">
      <QList>
        <QItem
          v-if="canEditProblem"
          clickable
          @click="$emit('edit')"
        >
          <QItemSection> Editar </QItemSection>
        </QItem>
        <QItem
          v-if="isAdmin"
          clickable
          @click="$emit('editStatus')"
        >
          <QItemSection> Status </QItemSection>
        </QItem>
        <QItem
          v-if="isAdmin"
          clickable
          @click="$emit('delete')"
        >
          <QItemSection> Excluir </QItemSection>
        </QItem>
        <QItem
          v-if="isShowApproved"
          clickable
          @click="$emit('approve')"
        >
          <QItemSection> Aprovar </QItemSection>
        </QItem>
        <QItem
          v-if="isShowReject"
          clickable
          @click="$emit('reject')"
        >
          <QItemSection> Rejeitar </QItemSection>
        </QItem>
      </QList>
    </QMenu>
  </QBtn>
</template>

<script>
import { QBtn, QMenu, QList, QItem, QItemSection } from 'quasar'
import injectUser from 'src/domains/User/mixins/inject-user'
import { injectProblem } from '../../support'
import { PROBLEM_STATUS_CONSTANTS } from 'src/domains/ProblemStatus/constants'

export default {
  name: 'ProblemActions',
  mixins: [ injectUser, injectProblem ],
  components: {
    QBtn,
    QMenu,
    QList,
    QItem,
    QItemSection
  },
  computed: {
    isShowApproved () {
      return this.isAdmin && !this.isApproved
    },
    isRejected () {
      return PROBLEM_STATUS_CONSTANTS.REJECTED
    },
    isShowReject () {
      return this.isAdmin && !this.isRejected
    }
  }
}
</script>

<style>

</style>
