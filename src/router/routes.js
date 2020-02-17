import Home from '../views/Home.vue'

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
            title: 'Taeri || Home'
        }
    },
    {
        path: '/about',
        name: 'about',
        meta:{
            title: 'Taeri - About Us'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        meta:{
            title: 'Taeri - Contact Us'
        },
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        meta:{
            title: 'Taeri Settings'
        },
        component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
    },
    {
        path: '/todo',
        name: 'todo',
        meta:{
            title: 'Taeri - Todo'
        },
        component: () => import(/* webpackChunkName: "to-do" */ '../views/Todo.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta:{
            title: 'Taeri - Login'
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta:{
            title: 'Taeri - Register'
        },
        component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
    }
];
