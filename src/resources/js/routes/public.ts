// 認証不要の画面 ルーター 集約 ※ 機能ごとに なのか
/* import 機能ごとのルーター*/
    import {DashboardRoutes} from '@/features/dashboard/routes';
import {PlayersRoutes} from '@/features/players/routes';
/* for types */
import {RouteRecordRaw} from 'vue-router';
import Players from '@/features/players/routes/Players.vue'; // router定義制限

//  認証不要の画面 ルーター
export const PublicRoutes: Readonly<RouteRecordRaw[]> = [
    ...DashboardRoutes,
    ...PlayersRoutes,
]
