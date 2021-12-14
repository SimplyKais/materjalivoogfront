import Vue from 'vue'
import VueRouter from 'vue-router'
import About from './pages/About'
import Home from './pages/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About

    }
]


const router = new VueRouter({
    routes
})

export default router