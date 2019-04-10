<template>
  <AppModal
    ref="modal"
    size="medium"
    actions-align="right">
    <div slot="title">
      <div class="text-h6"> Editar problema </div>
    </div>

    <div>
      <QForm>
        <QInput
          filled
          label="Descreva seu problema: "
          type="textarea"
          v-model="model.description" />

        <QInput
          filled
          label="Você gostaria de deixar alguma solução?"
          type="textarea"
          v-model="model.suggestion" />
      </QForm>
    </div>

    <div slot="actions">
      <QBtn label="Confirmar" color="primary" />
      <QBtn flat label="Cancelar" color="negative" @click="close" />
    </div>
  </AppModal>
</template>

<script>
import { get } from 'lodash'
import { QForm, QInput } from 'quasar'
import AppModal from 'src/components/Modal'
import modalMixin from 'src/support/mixins/modal'

export default {
  name: 'EditProblemModal',
  mixins: [ modalMixin ],
  components: { AppModal, QForm, QInput },
  props: {
    problem: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    model: {
      description: null,
      suggestion: null
    }
  }),
  methods: {
    fill () {
      this.model.description = get(this.problem, 'description', '')
      this.model.suggestion = get(this.problem, 'suggestion', '')
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.fill()
    })
  }
}
</script>

<style>

</style>
