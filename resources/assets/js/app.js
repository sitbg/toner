require('./bootstrap');

import Vue from 'vue';

import VueRouter from 'vue-router';

import axios from 'axios';

import VueAxios from 'vue-axios';

import App from './App.vue';

import Dashboard from './components/Dashboard.vue';

import Home from './components/Home.vue';

import Register from './components/Register.vue';

import Login from './components/Login.vue';

Vue.use(VueRouter);

Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://localhost:4444/api';

const router = new VueRouter({

    routes: [{

        path: '/',

        name: 'home',

        component: Home,

        meta: {

            auth: true

        }

    },{

        path: '/register',

        name: 'register',

        component: Register,

        meta: {

            auth: {
                roles: 1,
                forbiddenRedirect: '/'
            }
        }

    },{

        path: '/login',

        name: 'login',

        component: Login,

        meta: {

            auth: false

        }

    },{

        path: '/dashboard',

        name: 'dashboard',

        component: Dashboard,

        meta: {

            auth: true

        }

    }]

});

Vue.router = router

Vue.use(require('@websanova/vue-auth'), {

    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),

    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),

    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),

    rolesVar: 'admin'
});

App.router = Vue.router

new Vue(App).$mount('#app');