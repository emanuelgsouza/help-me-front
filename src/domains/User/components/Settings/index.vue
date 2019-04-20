<template>
  <div class="settings-user">
    <GeneralInformations
      :model="userData"
      @input="updateUser"
    />

    <br />

    <QBtn
      color="positive"
      label="Salvar"
      :disable="disableSave"
      @click="onSave"
    />
  </div>
</template>

<script>
// import { QOptionGroup } from 'quasar'
import { set, isEqual, pick } from 'lodash'
import ComponentsMixin from './components'
import injectUser from '../../mixins/inject-user'
import { editUser } from 'src/services/firebase/database'

const PROPS_TO_ANALYSE = [
  'name'
]

export default {
  name: 'UserSettingsForm',
  mixins: [ injectUser, ComponentsMixin ],
  // components: { QOptionGroup },
  data: () => ({
    userData: {},
    university_link: 'student',
    options: [
      {
        label: 'Estudante da Unigranrio',
        value: 'student'
      },
      {
        label: 'Estudante',
        value: 'student'
      },
      {
        label: 'Estudante',
        value: 'student'
      }
    ]
  }),
  computed: {
    disableSave () {
      return isEqual(
        pick(this.userData, PROPS_TO_ANALYSE),
        pick(this.user, PROPS_TO_ANALYSE)
      )
    }
  },
  watch: {
    user: 'fillUser'
  },
  methods: {
    updateUser ({ path, value }) {
      set(this.userData, path, value)
    },
    onSave () {
      this.$q.loading.show({
        message: 'Atualizando seus dados'
      })

      const { uid } = this.user

      return editUser(uid, this.userData)
        .then(() => {
          this.$q.notify({
            message: 'Dados atualizados',
            color: 'positive'
          })

          this.$q.loading.hide()

          this.$router.push({
            name: 'dashboard.problems.list'
          })
        })
        .catch(err => {
          this.$q.loading.hide()
          console.error(err.message)
          this.$q.notify({
            message: 'Houve algum problema na atualização dos seus dados',
            color: 'negative'
          })
        })
    },
    fillUser (user) {
      this.userData = { ...user || {} }
    }
  },
  mounted () {
    this.fillUser(this.user)
  }
}
</script>

<style>

</style>
