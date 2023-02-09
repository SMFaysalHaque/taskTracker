import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Cart from '../views/cart'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart, 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router