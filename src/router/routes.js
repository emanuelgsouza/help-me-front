import HomeRoutes from 'src/modules/Home/routes'

const routes = [
  ...HomeRoutes
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
