import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import RecipePage from "@/views/RecipePage.vue";
import NotFound from "@/views/NotFound.vue";
import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";
import inputForm from "@/views/inputForm.vue";


const routes = [
    { path:'/',
    name:'Home',
     component:Home},
    { path:'/recipe/:id',
    name:'Recipe',
    component: RecipePage, props:true},
    { path:'/Login',
        component: Login,
        name:'login'
    },
    { path:'/InputForm',
        component: inputForm,
        name:'inputForm'
    },
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