<template>
  <div class="user-info">
    <Box
      title="Informações Gerais"
      :infos="[
        { icon: 'fas fa-user', label: user.name },
        { icon: 'fas fa-envelope', label: user.email }
      ]"
    />

    <br />

    <template v-if="isStudent">
      <Box
        title="Dados do estudante"
        :infos="[
          { icon: 'fas fa-id-card', label: user.registration, prefix: 'Matrícula' }
        ]"
      />
    </template>

    <template v-if="isEmployee">
      <Box
        title="Dados do funcionário"
        :infos="[
          { icon: 'fas fa-id-card', label: user.employee_register, prefix: 'Matrícula' },
          { icon: 'fas fa-info-circle', label: user.employee_observations },
          {
            icon: 'fas fa-info-circle',
            label: user.is_course_coordinator ? 'Coordenador de Curso' : 'Não é coordenador'
          }
        ]"
      />
    </template>

    <template v-if="isNotEmployee">
      <Box
        title="Outras informações"
        :infos="[
          { icon: 'fas fa-map-marked-alt', label: user.city, prefix: 'Cidade' },
          { icon: 'fas fa-phone', label: user.phone, prefix: 'Telefone' },
          { icon: 'fas fa-user-tie', label: user.professional, prefix: 'Profissão' }
        ]"
      />

      <br v-if="hasCompany" />

      <Box
        v-if="hasCompany"
        title="Informações da empresa"
        :infos="[
          { icon: 'fas fa-building', label: user.company_name, prefix: 'Nome' },
          { icon: 'fas fa-building', label: user.company_activity, prefix: 'Atividade' },
          { icon: 'fas fa-phone', label: user.company_phone, prefix: 'Telefone' }
        ]"
      />
    </template>

    <br />

    <QChip
      icon="fas fa-calendar-plus"
      color="primary"
      square
      text-color="white"
      :label="createdAt"
    />
  </div>
</template>

<script>
import { QChip } from 'quasar'
import moment from 'moment'
import Box from './components/Box'
import { UNIVERSITY_LINKS } from '../../support/constants'

export default {
  name: 'UserInfo',
  components: {
    Box,
    QChip
  },
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isStudent () {
      return this.user.university_link === UNIVERSITY_LINKS.STUDENT
    },
    isEmployee () {
      return this.user.university_link === UNIVERSITY_LINKS.EMPLOYEE
    },
    isNotEmployee () {
      return this.user.university_link === UNIVERSITY_LINKS.NOT_EMPLOYEE
    },
    hasCompany () {
      return this.user.is_employer
    },
    createdAt () {
      return 'Usuário desde ' + moment(this.user.created).format('MM-DD-YYYY')
    }
  }
}
</script>

<style>

</style>
