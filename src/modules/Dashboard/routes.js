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
        path: '/dashboard/problems/recently',
        name: 'dashboard.problems.recently',
        component: () => import('./Pages/Problems/List.vue')
      },
      {
        path: '/dashboard/problems/create',
        name: 'dashboard.problems.create',
        component: () => import('./Pages/Problems/Create.vue')
      },
      {
        path: '/dashboard/user/settings',
        name: 'dashboard.user.settings',
        component: () => import('./Pages/User/Settings.vue')
      }
    ]
  }
]
