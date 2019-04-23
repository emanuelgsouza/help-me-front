<template>
  <div class="settings-user">
    <GeneralInformations
      :model="userData"
      @input="updateUser"
    />

    <div class="q-my-md">
      <label class="no-margin"> Você é funcionário da Unigranrio? </label>
      <QOptionGroup
        inline
        :value="userData.university_link"
        :options="options"
        @input="val => updateUser({ path: 'university_link', value: val })"
      />
    </div>

    <StudentInformations
      v-if="isStudentInformations"
      :model="userData"
      @input="updateUser"
    />

    <NotEmployeeInformations
      v-if="isNotEmployeeInformations"
      :model="userData"
      @input="updateUser"
    />

    <CompanyInformations
      v-if="hasCompany"
      class="q-mt-md"
      :model="userData"
      @input="updateUser"
    />

    <EmployeeInformations
      v-if="isEmployeeInformations"
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
import { QOptionGroup } from 'quasar'
import { set, isEqual, omit, get } from 'lodash'
import ComponentsMixin from './components'
import injectUser from '../../mixins/inject-user'
import { editUser } from 'src/services/firebase/database'

const PROPS_TO_OMIT = [
  'uid',
  'is_admin',
  'created',
  'photoURL'
]

export default {
  name: 'UserSettingsForm',
  mixins: [ injectUser, ComponentsMixin ],
  components: { QOptionGroup },
  data: () => ({
    userData: {},
    options: [
      {
        label: 'Sou estudante',
        value: 'student'
      },
      {
        label: 'Não',
        value: 'not_employee'
      },
      {
        label: 'Sim',
        value: 'employee'
      }
    ]
  }),
  computed: {
    disableSave () {
      return isEqual(
        omit(this.userData, PROPS_TO_OMIT),
        omit(this.user, PROPS_TO_OMIT)
      )
    },
    universityLink () {
      return get(this.userData, 'university_link', '')
    },
    isStudentInformations () {
      return this.universityLink === 'student'
    },
    isNotEmployeeInformations () {
      return this.universityLink === 'not_employee'
    },
    isEmployeeInformations () {
      return this.universityLink === 'employee'
    },
    hasCompany () {
      return get(this.userData, 'is_employer', false)
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
