// ダッシュボード のルーター 集約 ※ ページへのURLと ページ内容をこのディレクトリでまとめる
// TODO:あくまでも SPAかつ Laravel routerを使わないで一旦バージョンなので 要検討
/* import 画面*/
import Dashboard from './Dashboard.vue';
/* for types */
import {RouteRecordRaw} from 'vue-router'; // router定義制限

// export ダッシュボード 機能のルーター
export const DashboardRoutes: Readonly<RouteRecordRaw[]> = [
    // 選手一覧 として必要な画面だけ定義
    { path: '/', name: 'home', component: Dashboard },
]
