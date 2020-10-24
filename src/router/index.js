import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/film/Film'
import Cinema from '@/views/cinema/Cinema'
import Personal from '@/views/personal/Personal'
import Nowplaying from '@/views/film/components/Nowplaying'
import Comingsoon from '@/views/film/components/Comingsoon'
import FilmDetail from '@/views/film/FilmDetail'
// import FilmDetail from '@/views/film/components/FilmDetail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: Film,
    children:[
      {
        path:"/film/nowplaying", 
        component:Nowplaying
      },
      {
        path:"comingsoon", 
        component:Comingsoon
      },
      {
        path:"", 
        redirect:'nowplaying'
      }
    ]
  },
  {
    path: '/detail/:id', //动态路由
    name: 'stardetail',
    component: FilmDetail
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: Cinema
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'*',
    redirect:'/film'
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
