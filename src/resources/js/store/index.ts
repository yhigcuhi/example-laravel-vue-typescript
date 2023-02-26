/***********************************
 * vuex store エントリーポイント
 ***********************************/
/* import vuex */
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
/* import modules */
import {players} from '@/features/players';
import {teams} from '@/features/teams';

// RootStateの型定義
export type RootState = {};

// storeをprovide/injectするためのキー
export const key: InjectionKey<Store<RootState>> = Symbol();

// store本体
export const store = createStore<RootState>({
    // 管理 モジュール一覧
    modules: {
        // Entity系
        players,
        teams,
        // 共通系
        // alert(error, success)とか toastとか ref: creative-timのvue-material-dashboard-laravel-masterが役に立つかな
    }
});

// useStoreを使う時にキーの指定を省略するためのラッパー関数
export const useStore = () => {
    return baseUseStore(key);
}
