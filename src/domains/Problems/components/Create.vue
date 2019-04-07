<template>
  <QForm
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-y-md">
    <QInput
      filled
      label="Qual o seu nome?"
      v-model="model.name"
      :disable="hasUser" />

    <QInput
      filled
      label="Qual o seu email?"
      v-model="model.email"
      :disable="hasUser" />

    <QInput
      filled
      label="Qual o seu número de telefone?"
      mask="(##) ##### - ####"
      hint="Mask: (##) ##### - ####"
      v-model="model.phone" />

    <QInput
      filled
      label="Descreva seu problema: "
      type="textarea"
      v-model="model.description" />

    <QInput
      filled
      label="Você gostaria de deixar alguma solução?"
      type="textarea"
      v-model="model.sugestion" />

    <div class="q-mt-md">
      <QBtn
        label="Cadastrar"
        type="submit"
        color="primary"/>
      <QBtn
        label="Limpar"
        type="reset"
        color="primary"
        flat
        class="q-ml-sm" />
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
      sugestion: null
    }
  }),
  components: {
    QForm,
    QInput
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
