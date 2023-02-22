/***********************************
 * エントリーポイント
 ***********************************/
/* import 設定 */
import './bootstrap';
/* import vue */
import { createApp } from 'vue'
/* import css */
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap利用
/* import 部品 */
import App from '@/App.vue'

// MPA componentsとして配布
createApp({
    components: {
        MainApp: App,
    }
})
    .mount('#app') // マウント先登録
;
