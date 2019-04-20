<template>
  <AppModal
    ref="modal"
    size="medium"
    actions-align="right">
    <div slot="title">
      <div class="text-h6"> Editar Status do Problema </div>
    </div>

    <ProblemStatusSelect
      label="Filtre por um tipo"
      v-model="model.problem_status"
    />

    <div slot="actions">
      <QBtn
        label="Confirmar"
        color="primary"
        :disable="isEqualData"
        @click="onSave" />
      <QBtn
        flat
        label="Cancelar"
        color="negative"
        @click="close" />

      <AppLoading :loading="loading" />
    </div>
  </AppModal>
</template>

<script>
import { get } from 'lodash'
import AppModal from 'src/components/Modal'
import AppLoading from 'src/components/Loading'
import modalMixin from 'src/support/mixins/modal'
import { editProblem } from 'src/services/firebase/database'
import ProblemStatusSelect from 'src/domains/ProblemStatus/components/ProblemStatusSelect'

export default {
  name: 'EditProblemStatusModal',
  mixins: [ modalMixin ],
  components: { AppModal, AppLoading, ProblemStatusSelect },
  props: {
    problem: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    loading: false,
    model: {
      problem_status: null
    }
  }),
  computed: {
    isEqualData () {
      return this.model.problem_status === this.problem.problem_status
    }
  },
  methods: {
    fill () {
      this.model.problem_status = get(this.problem, 'problem_status', '')
    },
    onSave () {
      this.loading = true
      const { uid } = this.problem

      return editProblem(uid, this.model)
        .then(() => {
          this.loading = false
          this.$q.notify({
            message: 'Problema atualizado com sucesso',
            color: 'positive'
          })

          this.close()
        })
        .catch(err => {
          this.loading = false
          console.error(err.message)
          this.$q.notify({
            message: 'Houve algum problema na atualização do problema',
            color: 'negative'
          })
        })
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
