<template>
  <AppModal
    ref="modal"
    size="medium"
    actions-align="right">
    <div slot="title">
      <div class="text-h6"> Cadastrar problema </div>
    </div>

    <div class="bg-orange text-white q-pa-md rounded-borders" v-if="!hasUser">
      <p class="q-ma-none text-h6 text-center">
        É necessário estar logado para poder cadastrar um problema
      </p>

      <LoginButton style="display: block; margin: 0 auto" />
    </div>

    <!-- <div class="bg-blue text-white q-pa-xs rounded-borders" v-if="hasUser">
      <p class="q-ma-none text-center">
        Após criar um problema, ele irá para análise por parte da Coordenadoria de TI da Unigranrio, para que após aprovado, ele possa aparecer na listagem de problemas.
      </p>
    </div> -->

    <CreateProblem @submit="onSubmit" />
  </AppModal>
</template>

<script>
import AppModal from 'src/components/Modal'
import modalMixin from 'src/support/mixins/modal'
import injectUserMixin from 'src/domains/User/mixins/inject-user'
import { createProblem } from 'src/services/firebase/database'
import LoginButton from 'src/domains/User/components/LoginButton'
import CreateProblem from '../Form'

export default {
  name: 'ProblemsCreatePage',
  mixins: [ modalMixin, injectUserMixin ],
  components: { AppModal, CreateProblem, LoginButton },
  data: () => ({
    model: {}
  }),
  methods: {
    onSubmit (model) {
      this.model = { ...model }

      return this.$q.dialog({
        message: 'Após criar um problema, ele irá para análise por parte da Coordenadoria de TI da Unigranrio, para que após aprovado, ele possa aparecer na listagem de problemas.',
        preventClose: true
      })
        .onOk(() => {
          this.$q.loading.show({
            message: 'Subindo informações do problema',
            color: 'primary'
          })

          return createProblem(model, this.user)
            .then(() => {
              this.$q.loading.hide()

              this.$q.notify({
                message: 'Problema criado com sucesso',
                color: 'positive',
                icon: 'thumb_up'
              })

              this.$emit('refetch')

              this.close()
            })
            .catch(err => {
              this.$q.loading.hide()
              console.error(err)

              this.$q.notify({
                message: 'Houve algum problema na criação do problema, contacte o suporte',
                color: 'negative',
                icon: 'thumb_down'
              })
            })
        })
    }
  }
}
</script>

<style>

</style>
