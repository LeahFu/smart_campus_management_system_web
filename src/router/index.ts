//1. import Vue Router module
import { createRouter, createWebHashHistory } from "vue-router"
// Define some routes, each route needs to be mapped to a component
const routes = [{
    path:'/',
    name:'Login',
    meta:{title:'smart campus management system login'},
    component:()=>import('../views/Login.vue')
}]
//
const router = createRouter({
    history: createWebHashHistory(),
    routes:routes
})

export default router