export default [
  {
    path: '/dashboard',
    name: 'dashboard.index',
    redirect: '/dashboard/problems/list',
    component: () => import('./DashboardLayout.vue'),
    children: [
      {
        path: '/dashboard/problems/list',
        name: 'dashboard.problems.list',
        component: () => import('./Pages/Problems/List.vue')
      },
      {
        path: '/dashboard/problems/create',
        name: 'dashboard.problems.create',
        component: () => import('./Pages/Problems/Create.vue')
      }
    ]
  }
]
