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
import router from '@/routes';

// 一旦 SPAとしてやる
createApp(App)
    .use(router)
    .mount('#app');
