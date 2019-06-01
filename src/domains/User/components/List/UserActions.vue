<template>
  <div>
    <QBtn color="grey-7" flat icon="more_vert" label="Ações">
      <QMenu auto-close anchor="bottom left" self="top left">
        <QList>
          <QItem
            clickable
            @click="$emit('editStatus')"
          >
            <QItemSection> Permissões </QItemSection>
          </QItem>
          <QItem
            v-if="!isOwnUser"
            clickable
            @click="deleteUser"
          >
            <QItemSection> Excluir Usuário </QItemSection>
          </QItem>
        </QList>
      </QMenu>
    </QBtn>
  </div>
</template>

<script>
import { QBtn, QMenu, QList, QItem, QItemSection } from 'quasar'
import { get } from 'lodash'
import moment from 'moment'
import { editUser } from 'src/services/firebase/database'
import injectUser from 'src/domains/User/mixins/inject-user'

export default {
  name: 'UserActions',
  mixins: [ injectUser ],
  components: {
    QBtn,
    QMenu,
    QList,
    QItem,
    QItemSection
  },
  props: {
    actionUser: Object
  },
  computed: {
    actionUserUid () {
      return get(this.actionUser, 'uid', null)
    },
    isOwnUser () {
      return this.actionUserUid === this.userUid
    }
  },
  methods: {
    deleteUser () {
      const model = {
        deleted: true,
        deleted_date: moment().format('YYYY-MM-DD HH:mm:ss')
      }

      return this.$q.dialog({
        title: 'Aprovar',
        message: 'Ao aprovar este problema, ele estará disponível para visualização'
      })
        .onOk(() => {
          return editUser(this.actionUserUid, model)
            .then(() => {
              this.$q.notify({
                message: 'Usuário excluído com sucesso',
                color: 'positive'
              })

              this.$emit('refresh')
            })
            .catch(err => {
              console.error(err)
              this.$q.notify({
                message: 'Não foi possível excluir o usuário',
                color: 'negative'
              })
            })
        })
    }
  }
}
</script>

<style>

</style>
