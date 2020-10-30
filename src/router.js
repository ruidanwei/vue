import Vue from 'vue'
import Home from './components/Home.vue'
import Config from './components/Config.vue'
import Application from './components/Application.vue'
import Shouye from './components/Shouye.vue'
import Second from './components/Second.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const routes = [ //eslint-disable-line no-unused-vars
    {
        path: '/',
        redirect: '/second',
        component: Home,
        children: [{
                path: '/home',
                name: 'home',
                component: Shouye,
            }, {
                path: '/application',
                name: 'application',
                component: Application
            }, {
                path: '/config',
                name: 'config',
                component: Config
            },
            {
                path: '/shouye',
                name: 'shouye',
                component: Shouye

            },
            {
                path: '/second',
                name: 'second',
                component: Second
            },
        ]
    },


]

const router = new VueRouter({
    routes
})

export default router