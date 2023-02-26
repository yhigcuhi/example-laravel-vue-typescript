/* import vue-router*/
import { createRouter,createWebHistory } from 'vue-router';
/* import 機能ごとの router*/
import {PublicRoutes} from '@/routes/public'; // ※ 認証前の画面ルーターなど権限別に細分化

const routes = [
    ...PublicRoutes, // 認証前の画面ルーター
]

const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})
// export router
export default router;
