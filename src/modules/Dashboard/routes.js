export default [
  {
    path: '/dashboard',
    name: 'dashboard.index',
    component: () => import('./DashboardLayout.vue'),
    children: [
      {
        path: '/dashboard/problems/create',
        name: 'dashboard.problems.create',
        component: () => import('./Pages/Problems/Create.vue')
      }
    ]
  }
]
