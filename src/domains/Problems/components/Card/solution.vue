<template>
  <QDialog v-model="alert">
    <QCard>
      <QCardSection>
        <div class="text-h6">Solução Proposta</div>
      </QCardSection>

      <QCardSection>
        {{ solution }}
      </QCardSection>

      <QCardActions align="right">
        <QBtn flat label="OK" color="primary" v-close-popup />
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<script>
import { QDialog, QCard, QCardSection, QCardActions, QBtn } from 'quasar'

export default {
  name: 'SolutionModal',
  components: { QDialog, QCard, QCardSection, QCardActions, QBtn },
  props: {
    solution: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    alert: false
  }),
  methods: {
    open () {
      this.alert = true
    },
    close () {
      this.alert = false
    }
  }
}
</script>

<style>

</style>
