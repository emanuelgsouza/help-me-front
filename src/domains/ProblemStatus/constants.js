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
    name: 'Pendente de apreciação',
    label: 'Pendente de apreciação',
    description: 'O problema uma vez aprovado, estará pendente de apreciação por algum aluno ou grupo de alunos da Unigranrio, para que seja executado um projeto',
    value: 'PENDING'
  },
  APPRECIATED: {
    name: 'Apreciado pela equipe de TI',
    label: 'Apreciado pela equipe de TI',
    description: 'Neste status, dizemos que o problema foi "resolvido"',
    value: 'APPRECIATED'
  }
}
