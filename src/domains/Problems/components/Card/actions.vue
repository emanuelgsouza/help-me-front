<template>
  <QBtn color="grey-7" round flat icon="more_vert">
    <QMenu auto-close anchor="bottom left" self="top left">
      <QList>
        <QItem clickable @click="$emit('edit')">
          <QItemSection> Editar </QItemSection>
        </QItem>
        <QItem clickable>
          <QItemSection @click="$emit('editStatus')"> Status </QItemSection>
        </QItem>
      </QList>
    </QMenu>
  </QBtn>
</template>

<script>
import { QBtn, QMenu, QList, QItem, QItemSection } from 'quasar'
import injectUser from 'src/domains/User/mixins/inject-user'

export default {
  name: 'ProblemActions',
  mixins: [ injectUser ],
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
