<template>
  <AppModal
    ref="modal"
    size="medium"
    actions-align="right"
    @show="onShow"
    @hide="onHide"
  >
    <div slot="title">
      <div class="text-h6"> {{ title }} </div>
    </div>
    <UserInfo :user="user" />

    <div slot="actions">
      <QBtn
        flat
        label="Ok"
        color="primary"
        @click="close" />
    </div>
  </AppModal>
</template>

<script>
import UserInfo from '../index'
import AppModal from 'src/components/Modal'
import modalMixin from 'src/support/mixins/modal'
import { getUser } from 'src/services/firebase/database'

export default {
  name: 'UserInfoModal',
  mixins: [ modalMixin ],
  components: { UserInfo, AppModal },
  props: {
    userUid: {
      type: String
    }
  },
  data: () => ({
    user: {}
  }),
  computed: {
    title () {
      return 'Dados do usuário'
    }
  },
  methods: {
    async onShow () {
      this.$q.loading.show({
        message: 'Carregando dados do criador deste problema...'
      })

      try {
        const user = await getUser(this.userUid)
        this.user = user
      } catch (err) {
        console.error(err.message)

        this.$q.notify({
          message: 'Houve algum problema no carregamento do usuário',
          color: 'negative'
        })
      } finally {
        this.$q.loading.hide()
      }
    },
    onHide () {
      this.user = {}
    }
  }
}
</script>

<style>

</style>
