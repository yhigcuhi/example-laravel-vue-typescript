/*********************************************
 * Header Vuex 管理
 *********************************************/
/* import util*/
import {isEmpty} from 'lodash';
/* for types*/
import {ActionTree, GetterTree, MutationTree, Module} from 'vuex';
import {RootState} from '@/store';

/*********************************************
 * store 定義
 *********************************************/
// state 定義
type State = {title: string};
// 管理物
const state : State = {
    title: 'サンプル アプリ'// デフォルトタイトル
}
// getter
const getters: GetterTree<State, RootState> = {
};
// getter
const actions: ActionTree<State, RootState> = {
    // タイトル更新
    async updateHeaderTitle({commit}, title) {
        // 前提条件
        if (isEmpty(title)) return; // 空対策
        // ヘッダータイトル更新
        commit('setTitle', title);
    },

};
// mutations
const mutations: MutationTree<State> = {
    // ヘッダータイトル 設定
    setTitle: (state: State, title: string) => {state.title = title;},
}

// export module
const module: Module<State, RootState> = {
    namespaced: true, // 名前空間利用
    // vuex moduleの内容たち
    state,
    getters,
    actions,
    mutations,
}
export default module;
