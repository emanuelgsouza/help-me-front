<template>
  <QForm
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-y-md">
    <QInput
      filled
      label="Qual o seu nome?"
      v-model="model.name"
      disable />

    <QInput
      filled
      label="Qual o seu email?"
      v-model="model.email"
      disable />

    <QInput
      filled
      label="Qual o seu número de telefone?"
      mask="(##) ##### - ####"
      hint="Mask: (##) ##### - ####"
      v-model="model.phone"
      :disable="disableInput" />

    <QInput
      filled
      label="Descreva seu problema: "
      type="textarea"
      v-model="model.description"
      :disable="disableInput" />

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
import { QForm, QInput } from 'quasar'
import injectUserMixin from 'src/domains/User/mixins/inject-user'

export default {
  name: 'CreateProblem',
  mixins: [ injectUserMixin ],
  data: () => ({
    model: {
      name: null,
      email: null,
      phone: null,
      description: null,
      suggestion: null
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
      this.$emit('submit', this.model)
    },
    onReset () {}
  },
  mounted () {
    this.injectUserInModel()
  }
}
</script>

<style>

</style>
