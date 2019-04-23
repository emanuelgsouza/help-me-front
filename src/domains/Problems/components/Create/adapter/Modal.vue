<template>
  <AppModal
    ref="modal"
    size="medium"
    actions-align="right"
    @show="onOpen">
    <div slot="title">
      <div class="text-h6"> Cadastrar problema </div>
    </div>

    <CreateProblem @submit="onSubmit" />
  </AppModal>
</template>

<script>
import AppModal from 'src/components/Modal'
import modalMixin from 'src/support/mixins/modal'
import injectUserMixin from 'src/domains/User/mixins/inject-user'
import { createProblem } from 'src/services/firebase/database'
import CreateProblem from '../Form'

export default {
  name: 'ProblemsCreatePage',
  mixins: [ modalMixin, injectUserMixin ],
  components: { AppModal, CreateProblem },
  data: () => ({
    model: {}
  }),
  methods: {
    onSubmit (model) {
      this.model = { ...model }
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
    },
    checkUser () {
      if (!this.hasUser) {
        this.$q.dialog({
          title: 'Aviso',
          message: 'Só é possível cadastrar problemas usuário logados'
        })
          .onOk(() => {
            this.close()
          })
      }
    },
    onOpen () {
      this.checkUser()
    }
  }
}
</script>

<style>

</style>
