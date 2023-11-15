import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import RecipePage from "@/views/RecipePage.vue";
import NotFound from "@/views/NotFound.vue";


const routes = [
    { path:'/',
    name:'Home',
     component:Home},
    { path:'/recipe/:id',
    name:'Recipe',
    component: RecipePage, props:true},
    {  path:'/:pathMatch(.*)*',
        name:'NotFound',
        component: NotFound
    }
    ];

const router = createRouter({
history: createWebHistory(),
    routes,
})


export default router;