<template>
  <QDialog :maximized="isMaximized" :fullWidth="fullwidth" v-model="isOpen">
    <QCard :style="cardStyle">
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
    },
    size: {
      type: String,
      default: 'small'
    },
    fullwidth: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isOpen: false,
    isMaximized: false
  }),
  computed: {
    cardStyle () {
      if (this.size === 'small') {
        return null
      }

      if (this.size === 'medium') {
        return 'width: 700px; max-width: 80vw;'
      }

      return null
    }
  },
  methods: {
    open () {
      this.isOpen = true
    },
    close () {
      this.isOpen = false
    }
  },
  mounted () {
    this.isMaximized = this.$q.platform.is.mobile || false
  }
}
</script>

<style>

</style>
