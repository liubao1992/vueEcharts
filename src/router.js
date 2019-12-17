import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '@/components/Container'
import Container1 from '@/components/Container1'
import Container2 from '@/components/Container2'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
      path: '/',
      name: 'Container',
      component: Container
    },{
      path: '/Container1',
      name: 'Container1',
      component: Container1
    },{
      path: '/Container2',
      name: 'Container2',
      component: Container2
    }]
})
export default router