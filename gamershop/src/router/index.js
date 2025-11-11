import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProductView from '../views/ProductView.vue'
import AboutView from '../views/AboutView.vue' 

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  {
    path: '/dashboard',
    component: DashboardView,
    children: [
      { path: 'productos', component: ProductView }
    ]
  },
  { path: '/about', component: AboutView } 
]

export default createRouter({
  history: createWebHistory(),
  routes
})
