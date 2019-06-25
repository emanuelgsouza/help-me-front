/**
 * @type {Object}
 */
export const PROBLEM_STATUS = {
  PENDING_APPROVE: {
    name: 'Pendente de aprovação',
    label: 'Pendente de aprovação',
    description: 'Todos os problemas cadastrado, vão para este status, para que a coordenadoria da Unigranrio possa aprovar ou não o encaminhamento do projeto',
    value: 'PENDING_APPROVE'
  },
  PENDING: {
    name: 'Pendente de Aprovação',
    label: 'Pendente de Aprovação',
    description: 'O problema uma vez aprovado, estará pendente de aprovação por algum aluno ou grupo de alunos da Unigranrio, para que seja executado um projeto',
    value: 'PENDING'
  },
  APPRECIATED: {
    name: 'Aprovado',
    label: 'Aprovado',
    description: 'Neste status, dizemos que o problema foi "resolvido"',
    value: 'APPRECIATED'
  },
  ARCHIVED: {
    name: 'Arquivado',
    label: 'Arquivado',
    description: 'Um problema que já foi resolvido ou não, mas que não será mais contemplado para algum projeto',
    value: 'ARCHIVED'
  },
  REJECTED: {
    name: 'Rejeitado',
    label: 'Rejeitado',
    description: 'Diz-se do problema que não pode ser contemplado como um projeto de TI',
    value: 'REJECTED'
  }
}

export const PROBLEM_STATUS_CONSTANTS = {
  PENDING: 'PENDING',
  PENDING_APPROVE: 'PENDING_APPROVE',
  APPRECIATED: 'APPRECIATED',
  ARCHIVED: 'ARCHIVED',
  REJECTED: 'REJECTED'
}

/**
 * @type {Object}
 */
export const STATUS_COLOR = {
  PENDING_APPROVE: 'warning',
  PENDING: 'orange',
  APPRECIATED: 'positive',
  ARCHIVED: 'grey',
  REJECTED: 'negative'
}
