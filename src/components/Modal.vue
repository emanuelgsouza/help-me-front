<template>
  <QDialog v-model="isOpen">
    <QCard>
      <QCardSection>
        <slot name="title"></slot>
      </QCardSection>

      <QCardSection>
        <slot></slot>
      </QCardSection>

      <QCardActions :align="actionsAlign">
        <slot name="actions"></slot>
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<script>
import { QDialog, QCard, QCardSection, QCardActions } from 'quasar'
import modalMixin from 'src/support/mixins/modal'

export default {
  name: 'Modal',
  mixins: [ modalMixin ],
  components: { QDialog, QCard, QCardSection, QCardActions },
  props: {
    'actions-align': {
      type: String
    }
  },
  data: () => ({
    isOpen: false
  }),
  methods: {
    open () {
      this.isOpen = true
    },
    close () {
      this.isOpen = false
    }
  }
}
</script>

<style>

</style>
