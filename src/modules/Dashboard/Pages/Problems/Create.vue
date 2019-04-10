<template>
  <QPage padding>
    <h4 class="q-ma-none"> Cadastrar problema </h4>

    <div class="bg-orange text-white q-pa-md rounded-borders" v-if="!hasUser">
      <p class="q-ma-none text-h6 text-center">
        É necessário estar logado para poder cadastrar um problema
      </p>
    </div>

    <br />

    <CreateProblem @submit="onSubmit" />
  </QPage>
</template>

<script>
import CreateProblem from 'src/domains/Problems/components/Create'
import injectUserMixin from 'src/domains/User/mixins/inject-user'
import { createProblem } from 'src/services/firebase/database'

export default {
  name: 'ProblemsCreatePage',
  mixins: [ injectUserMixin ],
  components: { CreateProblem },
  data: () => ({
    model: {}
  }),
  methods: {
    onSubmit (model) {
      if (!this.hasUser) {
        return this.$q.notify({
          message: 'Você não está cadastrado para poder criar um problema',
          color: 'negative',
          icon: 'thumb_down'
        })
      }

      this.model = { ...model }

      return createProblem(model, this.user)
        .then(() => {
          this.$router.push('/dashboard')

          this.$q.notify({
            message: 'Problema criado com sucesso',
            color: 'positive',
            icon: 'thumb_up'
          })
        })
        .catch(err => {
          console.error(err)

          this.$q.notify({
            message: 'Houve algum problema na criação do problema, contacte o suporte',
            color: 'negative',
            icon: 'thumb_down'
          })
        })
    }
  }
}
</script>

<style>

</style>
