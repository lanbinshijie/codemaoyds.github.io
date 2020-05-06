import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import Index from './components/index';
import error from './components/error';

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
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
