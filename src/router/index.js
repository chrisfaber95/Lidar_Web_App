import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '@/assets/scripts/auth.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
	meta:{
      requiresAuth: false
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
	meta:{
      requiresAuth: false
    }
  },
  {
    path: '/rapportage',
    name: 'Rapportage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Rapportage.vue'),
	meta:{
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!auth.isAuthenticated()){  
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
    else{
      next();
    }
  }
  else if(to.matched.some(record => record.meta.requiresAdmin)){
    if(!auth.isAdmin()){
      next({
        path: '/dashboard',
        query: {
          redirect: to.fullPath
        }
      })
    }
    else{
      next();
    }
  }
  else{
    next();
  }
})

export default router
