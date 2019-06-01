export const columns = [
  {
    name: 'name',
    label: 'Nome',
    field: 'name',
    align: 'left'
  },
  {
    name: 'is_admin',
    label: 'Administrador?',
    field: 'is_admin',
    format: (val, row) => val ? 'Sim' : 'Não'
  }
]
