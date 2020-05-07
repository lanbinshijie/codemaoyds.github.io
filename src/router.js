import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import Index from './components/index';
import error from './components/error';
import forum from './components/forum';
import about from './components/about';

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/forum',
            component: forum
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/404',
            component: error
        },
        {
            path: '*', // 此处需特别注意置于最底部
            redirect: '/404'
        }
    ]
})
