import './assets/main.css'
import VueRouter from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import RecipeList from "@/components/RecipeList.vue";

const routes = [
    { path:'/',component:RecipeList}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory,
    routes,
})

const app = createApp({})

app.use(router)

app.mount('#app')