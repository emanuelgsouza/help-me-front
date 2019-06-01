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
        path: '/dashboard/user/list',
        name: 'dashboard.user.list',
        component: () => import('./Pages/User/List.vue')
      },
      {
        path: '/dashboard/user/settings',
        name: 'dashboard.user.settings',
        component: () => import('./Pages/User/Settings.vue')
      }
    ]
  }
]
