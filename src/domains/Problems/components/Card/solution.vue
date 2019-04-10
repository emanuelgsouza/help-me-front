<template>
  <AppModal
    ref="modal"
    actions-align="right">
    <div slot="title">
      <div class="text-h6">Solução Proposta</div>
    </div>

    <div>
      <p class="text-body1"> {{ solution }} </p>
    </div>

    <div slot="actions">
      <QBtn flat label="OK" color="primary" v-close-popup />
    </div>
  </AppModal>
</template>

<script>
import AppModal from 'src/components/Modal'
import modalMixin from 'src/support/mixins/modal'

export default {
  name: 'SolutionModal',
  mixins: [ modalMixin ],
  components: { AppModal },
  props: {
    solution: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
