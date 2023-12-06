import './assets/main.css'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import {createStore} from "vuex";
import VueKinesisEsm from "vue-kinesis";
import authModule from './store/modules/auth/index'

const app = createApp(App);

const store = createStore({
    modules: {
        auth: authModule
    }
});


app.use(router);
app.use(VueKinesisEsm);
app.use(store);
app.mount('#app');
