import './assets/main.css'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import VueKinesisEsm from "vue-kinesis";

const app = createApp(App);

app.use(router);
app.use(VueKinesisEsm);
app.mount('#app');
