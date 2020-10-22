
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') },
      { path: '/aboutUs', component: () => import('pages/AboutUs.vue') },
      { path: '/pressRelease', component: () => import('pages/PressRelease.vue') },
      { path: '/onlineCommerce', component: () => import('pages/OnlineCommerce.vue') },
      { path: '/news', component: () => import('pages/News.vue') },
      { path: '/recentProject', component: () => import('pages/RecentProject.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
