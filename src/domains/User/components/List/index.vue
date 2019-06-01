<template>
  <div class="list-users">
    <QTable
      ref="table"
      :data="listUsers"
      :columns="columns"
      row-key="name"
      :filter="filterName"
      selection="single"
      :selected.sync="selectedUsers"
    >
      <template v-slot:top-right>
        <QInput
          borderless
          dense
          debounce="300"
          v-model="filterName"
          placeholder="Pesquise por um nome"
        >
          <template v-slot:append>
            <QIcon name="search" />
          </template>
        </QInput>
      </template>

      <template
        v-if="hasSelectedUser && !isOwnUser"
        v-slot:top-left
      >
        <UserActions
          :action-user="selectedUser"
          @refresh="onRefresh"
        />
      </template>
    </QTable>
  </div>
</template>

<script>
import { QTable, QInput, QIcon } from 'quasar'
import { first, isEmpty, get } from 'lodash'
import UserActions from './UserActions'
import { columns } from './config'
import { loadUsers } from 'src/services/firebase/database'
import injectUser from 'src/domains/User/mixins/inject-user'

export default {
  name: 'UserListForm',
  components: { QTable, QInput, QIcon, UserActions },
  mixins: [ injectUser ],
  data: () => ({
    listUsers: [],
    columns,
    selectedUsers: [],
    filterName: ''
  }),
  computed: {
    hasSelectedUser () {
      return !isEmpty(this.selectedUsers)
    },
    selectedUser () {
      return first(this.selectedUsers)
    },
    actionUserUid () {
      return get(this.selectedUser, 'uid', null)
    },
    isOwnUser () {
      return this.actionUserUid === this.userUid
    }
  },
  methods: {
    loadData () {
      this.$q.loading.show({
        message: 'Carregando os usuários da plataforma'
      })

      return loadUsers()
        .then(users => {
          this.$q.loading.hide()
          this.listUsers = users
        })
        .catch(err => {
          this.$q.loading.hide()
          console.error(err.message)
          this.$q.notify({
            message: 'Houve algum problema na listagem dos usuários',
            color: 'negative'
          })
        })
    },
    onRefresh () {
      this.$refs.table.clearSelection()
      this.loadData()
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>

<style>

</style>
