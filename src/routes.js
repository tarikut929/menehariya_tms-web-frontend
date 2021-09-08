import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import User from './components/User.vue';
import EditUser from './components/EditUser.vue';




const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/user",
        name: "user",
        component: User
    },
    {
        path: "/editUser",
        name: "editUser",
        component: EditUser
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;