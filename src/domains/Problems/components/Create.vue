<template>
  <QForm
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-y-md">
    <QInput
      filled
      label="Qual o seu nome?"
      v-model="model.name"
      disable
      :rules="[
        val => val.length > 0 || 'Preencha seu nome'
      ]" />

    <QInput
      filled
      label="Qual o seu email?"
      v-model="model.email"
      disable
      :rules="[
        val => val.length > 0 || 'Preencha seu e-mail'
      ]" />

    <QInput
      filled
      label="Qual o seu número de telefone?"
      mask="(##) ##### - ####"
      hint="Mask: (##) ##### - ####"
      v-model="model.phone"
      :disable="disableInput"
      :rules="[
        val => val.length > 0 || 'Preencha seu número de telefone'
      ]" />

    <QInput
      filled
      label="Descreva seu problema: "
      type="textarea"
      v-model="model.description"
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

    <div class="q-mt-md">
      <QBtn
        label="Cadastrar"
        type="submit"
        color="primary"
        :disable="disableInput" />
      <QBtn
        label="Limpar"
        type="reset"
        color="primary"
        flat
        class="q-ml-sm"
        :disable="disableInput" />
    </div>
  </QForm>
</template>

<script>
import { trim } from 'lodash'
import { QForm, QInput } from 'quasar'
import injectUserMixin from 'src/domains/User/mixins/inject-user'

export default {
  name: 'CreateProblem',
  mixins: [ injectUserMixin ],
  data: () => ({
    model: {
      name: '',
      email: '',
      phone: '',
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
