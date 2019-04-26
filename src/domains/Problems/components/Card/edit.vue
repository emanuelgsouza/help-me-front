<template>
  <AppModal
    ref="modal"
    size="medium"
    actions-align="right">
    <div slot="title">
      <div class="text-h6"> Editar problema </div>
    </div>

    <div>
      <QForm class="q-gutter-md">
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

        <QSelect
          v-if="isAdmin && isRecentlyProblem"
          filled
          emit-value
          map-options
          label="Aprovar problema para aparecer na listagem"
          :options="options"
          v-model="model.approved" />
      </QForm>
    </div>

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
import { get, isEqual } from 'lodash'
import { QForm, QInput, QSelect } from 'quasar'
import AppModal from 'src/components/Modal'
import AppLoading from 'src/components/Loading'
import modalMixin from 'src/support/mixins/modal'
import { editProblem } from 'src/services/firebase/database'
import { PROBLEM_STATUS_CONSTANTS } from 'src/domains/ProblemStatus/constants'
import injectUser from 'src/domains/User/mixins/inject-user'

export default {
  name: 'EditProblemModal',
  mixins: [ modalMixin, injectUser ],
  components: { AppModal, QForm, QInput, QSelect, AppLoading },
  props: {
    problem: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    loading: false,
    model: {
      description: null,
      suggestion: null,
      approved: false
    },
    options: [
      { label: 'Sim', value: true },
      { label: 'Não', value: false }
    ]
  }),
  computed: {
    isEqualData () {
      return isEqual(this.model, {
        description: get(this.problem, 'description', ''),
        suggestion: get(this.problem, 'suggestion', '')
      })
    },
    isRecentlyProblem () {
      return !this.problem.approved
    }
  },
  methods: {
    fill () {
      this.model.description = get(this.problem, 'description', '')
      this.model.suggestion = get(this.problem, 'suggestion', '')
      this.model.approved = get(this.problem, 'approved', false)
    },
    factoryModel () {
      const model = {
        ...this.model
      }

      if (this.isRecentlyProblem && this.model.approved) {
        model['problem_status'] = PROBLEM_STATUS_CONSTANTS.PENDING
      }

      return model
    },
    onSave () {
      this.loading = true
      const { uid } = this.problem

      return editProblem(uid, this.factoryModel(this.model))
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
