import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes=[
  {
    path:'/',
    name:'main',
    component:()=>import('../views/Main.vue').then(err=>err),
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import('../views/Home').then(err=>err),
      },
      {
        path:'/user',
        name:"user",
        component:()=>import('../views/User').then(err=>err),
      },
      {
        path:'/mall',
        name:"mall",
        component:()=>import('../views/Mall').then(err=>err),
      },
      {
        path:'/pageOne',
        name:'pageOne',
        component:()=>import('../views/Other/pageOne.vue').then(err=>err),
      },
      {
        path:'/pageTwo',
        name:'pageTwo',
        component:()=>import('../views/Other/pageTwo.vue').then(err=>err),
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/Login').then(err=>err)
  }
  
]

const router = new VueRouter({
  mode:'history',
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router