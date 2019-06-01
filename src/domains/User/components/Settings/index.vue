<template>
  <div class="settings-user">
    <div v-if="isFirstLogin" class="bg-warning q-pa-md">
      <p> Verificamos que este é o seu primeiro login, gostaríamos de pedir que insira algumas informações para que possamos conhecê-lo(a) melhor </p>

      <p class="no-margin"> Caso não atualize algumas dessas informações, serás redirecionado para essa página a cada vez que entrar em nosso sistema </p>
    </div>

    <br />

    <GeneralInformations
      :model="userData"
      @input="updateUser"
    />

    <div class="q-my-md">
      <label class="no-margin"> Qual o seu vínculo com a Unigranrio? </label>
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
import { mapActions } from 'vuex'
import ComponentsMixin from './components'
import injectUser from '../../mixins/inject-user'
import editUser from '../../actions/edit'
import { PROPS_TO_OMIT, UNIVERSITY_LINKS } from '../../support/constants'

export default {
  name: 'UserSettingsForm',
  mixins: [ injectUser, ComponentsMixin ],
  components: { QOptionGroup },
  data: () => ({
    userData: {},
    options: [
      {
        label: 'Sou estudante',
        value: UNIVERSITY_LINKS.STUDENT
      },
      {
        label: 'Não possuo vínculo',
        value: UNIVERSITY_LINKS.NOT_EMPLOYEE
      },
      {
        label: 'Sim funcionário',
        value: UNIVERSITY_LINKS.EMPLOYEE
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
      return this.universityLink === UNIVERSITY_LINKS.STUDENT
    },
    isNotEmployeeInformations () {
      return this.universityLink === UNIVERSITY_LINKS.NOT_EMPLOYEE
    },
    isEmployeeInformations () {
      return this.universityLink === UNIVERSITY_LINKS.EMPLOYEE
    },
    hasCompany () {
      return get(this.userData, 'is_employer', false)
    },
    isFirstLogin () {
      return get(this.user, 'is_first_login', false)
    }
  },
  watch: {
    user: 'fillUser'
  },
  methods: {
    ...mapActions('auth', ['loadUser']),
    updateUser ({ path, value }) {
      set(this.userData, path, value)
    },
    onSave () {
      this.$q.loading.show({
        message: 'Atualizando seus dados'
      })

      const { uid } = this.user

      return editUser(uid, this.user, this.userData)
        .then(() => {
          this.$q.notify({
            message: 'Dados atualizados',
            color: 'positive'
          })

          this.$q.loading.hide()
          return this.loadUser(uid)
        })
        .then(() => {
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

      this.$nextTick(() => {
        if (this.isFirstLogin) {
          this.userData.is_first_login = false
        }
      })
    }
  },
  mounted () {
    this.fillUser(this.user)
  }
}
</script>

<style>

</style>
