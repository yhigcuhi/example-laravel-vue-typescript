/***********************************
 * エントリーポイント
 ***********************************/
/* import 設定 */
import './bootstrap';
/* import vue */
import { createApp } from 'vue'
/* import css */
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap利用
import '@/assets/css/main-app.css'; // メインデザイン
/* import fontawesome */
import {library} from "@fortawesome/fontawesome-svg-core";
// 無料で使えるフォントをインポート
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
// コンポネントをインポート
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
/* import form kit */
import {plugin, defaultConfig} from '@formkit/vue';
import { ja } from '@formkit/i18n';
/* import 部品 */
import App from '@/App.vue'
/* import router */
import router from '@/routes';
/* import vuex */
import {key, store} from '@/store';

// for fontawesome ライブラリに追加
library.add(fas, far, fab);

// 一旦 SPAとしてやる
createApp(App)
    .use(router) // vue router一旦
    .use(store, key) // vuex利用
    // TODO:エラー？？意味深？
    .use(plugin, defaultConfig({ // form kit登録
        locales: {ja},
        locale: 'ja',
    }))
    // グローバルとして登録しないとアイコン使えないので仕方なく
    // 名前は自由にきめてOK
    .component("fa", FontAwesomeIcon)
    // appエレメントにマウント
    .mount('#app')
;
