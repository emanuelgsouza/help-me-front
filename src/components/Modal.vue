<template>
  <QDialog
    :maximized="isMaximized"
    :fullWidth="fullwidth"
    v-model="isOpen"
    v-on="$listeners"
  >
    <QCard :style="cardStyle">
      <QCardSection class="row items-center">
        <slot name="title"></slot>
        <QSpace />
        <QBtn icon="close" flat round dense v-close-popup />
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
import {
  QDialog,
  QCard,
  QCardSection,
  QCardActions,
  QSpace
} from 'quasar'
import modalMixin from 'src/support/mixins/modal'

export default {
  name: 'Modal',
  mixins: [ modalMixin ],
  components: {
    QDialog,
    QCard,
    QCardSection,
    QCardActions,
    QSpace
  },
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
      if (this.isMaximized) {
        return null
      }

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
