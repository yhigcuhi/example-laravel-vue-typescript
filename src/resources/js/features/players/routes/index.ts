// 選手一覧 のルーター 集約 ※ ページへのURLと ページ内容をこのディレクトリでまとめる
// TODO:あくまでも SPAかつ Laravel routerを使わないで一旦バージョンなので 要検討
/* import 画面*/
import Players from './Players.vue';
import PlayersCreator from './PlayersCreator.vue';
/* for types */
import {RouteRecordRaw} from 'vue-router'; // router定義制限

// export 選手一覧 機能のルーター
export const PlayersRoutes: Readonly<RouteRecordRaw[]> = [
    // 選手一覧 として必要な画面だけ定義
    { path: '/players', name: 'players', component: Players },
    // 選手追加
    { path: '/players/new', name: 'players.create', component: PlayersCreator, sensitive: true}
]
