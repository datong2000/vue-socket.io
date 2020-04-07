import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/socket',
    component: () => {
        return import('@/view/socket.vue')
    }
}, ]
const router = new VueRouter({
    routes
})
export default router