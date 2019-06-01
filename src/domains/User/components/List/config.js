import { UNIVERSITY_LINKS_LABELS } from '../../support/constants'
import moment from 'moment'

export const columns = [
  {
    name: 'name',
    label: 'Nome',
    field: 'name',
    align: 'left'
  },
  {
    name: 'email',
    label: 'E-mail',
    field: 'email',
    align: 'left'
  },
  {
    name: 'university_link',
    label: 'Vínculo Unigranrio',
    field: 'university_link',
    align: 'left',
    format (val) {
      if (val) {
        return UNIVERSITY_LINKS_LABELS[val]
      }

      return '---'
    }
  },
  {
    name: 'created',
    label: 'Usuário desde',
    field: 'created',
    align: 'left',
    format (val) {
      if (val) {
        return moment(val).format('DD/MM/YYYY')
      }

      return '---'
    }
  },
  {
    name: 'is_admin',
    label: 'Administrador?',
    field: 'is_admin',
    format: (val, row) => val ? 'Sim' : 'Não'
  }
]
