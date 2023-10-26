import Vue from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import RecipePage from "@/views/RecipePage.vue";



const routes = [
    { path:'/', component:Home},
    { path:'/recipe/:id', component: RecipePage, props:true},
    ];

const router = new createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;