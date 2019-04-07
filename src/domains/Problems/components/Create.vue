<template>
  <QForm
    @submit="onSubmit"
    @reset="onReset">
    <QInput
      label="Qual o seu nome?"
      v-model="model.name" />

    <QInput
      label="Qual o seu email?"
      v-model="model.email" />

    <QInput
      label="Qual o seu número de telefone?"
      v-model="model.phone" />

    <QInput
      label="Descreva seu problema: "
      type="textarea"
      v-model="model.description" />

    <QInput
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

export default {
  name: 'CreateProblem',
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
  methods: {
    onSubmit () {},
    onReset () {
      this.model = { ...this.$options.data().model }
    }
  }
}
</script>

<style>

</style>
