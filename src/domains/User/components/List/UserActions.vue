<template>
  <div>
    <QBtn color="grey-7" flat icon="more_vert" label="Ações">
      <QMenu auto-close anchor="bottom left" self="top left">
        <QList>
          <QItem
            clickable
            @click="permissions"
          >
            <QItemSection> Permissões </QItemSection>
          </QItem>
          <QItem
            clickable
            @click="deleteUser"
          >
            <QItemSection> Excluir Usuário </QItemSection>
          </QItem>
          <QItem
            clickable
            @click="cards"
          >
            <QItemSection> Acessar Cards </QItemSection>
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
  data: () => ({
    userPermission: false
  }),
  computed: {
    actionUserUid () {
      return get(this.actionUser, 'uid', null)
    },
    isOwnUser () {
      return this.actionUserUid === this.userUid
    }
  },
  watch: {
    user: 'fillUser'
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
    },
    permissions () {
      this.$q.dialog({
        title: 'Permissões do usuário',
        message: 'Escolha qual o status do usuário no sistema',
        options: {
          type: 'radio',
          model: this.userPermission,
          items: [
            { label: 'Usuário Administrador', value: true, color: 'secondary' },
            { label: 'Usuário Comum', value: false }
          ]
        },
        cancel: true,
        persistent: true
      }).onOk(isAdmin => {
        const model = {
          is_admin: isAdmin
        }

        return editUser(this.actionUserUid, model)
          .then(() => {
            this.$q.notify({
              message: 'Mudança feita com sucesso',
              color: 'positive'
            })

            this.$emit('refresh')
          })
          .catch(err => {
            console.error(err)
            this.$q.notify({
              message: 'Não foi possível executar essa ação',
              color: 'negative'
            })
          })
      }).onCancel(() => {
        console.log('>>>> Cancel')
      }).onDismiss(() => {
        console.log('I am triggered on both OK and Cancel')
      })
    },
    cards () {
      this.$router.push({
        name: 'dashboard.problems.list',
        query: {
          user: this.actionUserUid,
          userName: this.actionUser.name
        }
      })
    },
    fillUser (user) {
      console.log(user.is_admin)
      this.userPermission = user.is_admin
    }
  },
  mounted () {
    this.fillUser(this.actionUser)
  }
}
</script>

<style>

</style>
