import Vue from 'vue';
import Router from 'vue-router';
const UserList = () => import(/* webpackChunkName: "UserList" */ './views/userList/UserList.vue');
const Home = () => import(/* webpackChunkName: "Home" */ './views/home/Home.vue');
const UserInfo = () => import(/* webpackChunkName: "UserInfo" */ './views/userInfo/UserInfo.vue');
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/userList',
            name: 'userList',
            component: UserList,
        },
        {
            path: '/userInfo',
            name: 'userInfo',
            component: UserInfo,
        },
    ],
});
