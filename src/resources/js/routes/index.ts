/* import vue-router*/
import { createRouter,createWebHistory } from 'vue-router';
import Home from '@/Welcome.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
]

const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})

export default router;
