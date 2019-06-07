<template>
  <QForm
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-y-md q-mt-md">
    <QInput
      filled
      label="Descreva seu problema: "
      type="textarea"
      v-model="model.description"
      hint="Obrigatório"
      :disable="disableInput"
      :rules="[
        val => val.length > 0 || 'Preencha seu problema'
      ]" />

    <QInput
      filled
      label="Você gostaria de deixar alguma solução?"
      type="textarea"
      v-model="model.suggestion"
      :disable="disableInput" />

    <div class="q-mt-md text-right">
      <QBtn
        label="Limpar"
        type="reset"
        color="primary"
        flat
        class="q-ml-sm"
        :disable="disableInput" />
      <QBtn
        label="Cadastrar"
        type="submit"
        color="primary"
        :disable="disableSaveBtn" />
    </div>
  </QForm>
</template>

<script>
import { trim, isEmpty } from 'lodash'
import { QForm, QInput } from 'quasar'
import injectUserMixin from 'src/domains/User/mixins/inject-user'

export default {
  name: 'CreateProblem',
  mixins: [ injectUserMixin ],
  data: () => ({
    model: {
      description: '',
      suggestion: ''
    }
  }),
  components: {
    QForm,
    QInput
  },
  computed: {
    disableInput () {
      return !this.hasUser
    },
    disableSaveBtn () {
      return !this.hasProblem
    },
    hasProblem () {
      return !isEmpty(this.model.description)
    }
  },
  watch: {
    user (val) {
      this.injectUserInModel()
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.factoryModelToSave(this.model))
    },
    onReset () {
      this.model = { ...this.$options.data().model }
    },
    factoryModelToSave (model) {
      const { description, suggestion } = model
      return {
        description: trim(description),
        suggestion: trim(suggestion)
      }
    }
  },
  mounted () {
    this.injectUserInModel()
  }
}
</script>

<style>

</style>
