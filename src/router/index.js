import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/index'
import simplePost from '@/components/simplePost'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/test',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/simplePost',
            name: 'simplePost',
            component: simplePost
        }

    ],
    mode: 'history'
})