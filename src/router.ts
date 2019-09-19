import Vue from 'vue';
import Router from 'vue-router';
const UserList = () => import(/* webpackChunkName: "about" */  './views/userList/UserList.vue');
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/userList',
            name: 'userList',
            component: UserList,
        },
    ],
});
