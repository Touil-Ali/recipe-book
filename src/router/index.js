import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import RecipePage from "@/views/RecipePage.vue";



const routes = [
    { path:'/',
    name:'Home',
     component:Home},
    { path:'/recipe/:id',
    name:'Recipe',
    component: RecipePage, props:true},
    ];

const router = createRouter({
history: createWebHistory(),
    routes,
})


export default router;