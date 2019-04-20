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
      </QList>
    </QMenu>
  </QBtn>
</template>

<script>
import { QBtn, QMenu, QList, QItem, QItemSection } from 'quasar'
import injectUser from 'src/domains/User/mixins/inject-user'
import { injectProblem } from '../../support'

export default {
  name: 'ProblemActions',
  mixins: [ injectUser, injectProblem ],
  components: {
    QBtn,
    QMenu,
    QList,
    QItem,
    QItemSection
  }
}
</script>

<style>

</style>
