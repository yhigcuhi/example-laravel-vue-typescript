/*********************************************
 * Teams Vuex 管理
 *********************************************/
/* import api*/
import {getTeams} from '../../api'
/* for types*/
import {ActionTree, GetterTree, MutationTree, Module} from 'vuex';
import {TeamEntity} from '../../types';
import {RootState} from '@/store';

/*********************************************
 * store 定義
 *********************************************/
// state 定義
type State = { all: TeamEntity[] };
// 管理物
const state : State = {
    all: [], // チーム一覧
}
// getter
const getters: GetterTree<State, RootState> = {
};
// getter
const actions: ActionTree<State, RootState> = {
    // 一覧 最新化
    async fetchAll({state, commit}) {
        // 前提条件
        if (state.all.length) return; // 取得済み 不要

        // 一覧 GET -> 内部状態変更
        const response = await getTeams(); // 一覧 取得
        if (response?.data?.length) commit('setTeams', response.data); // 内部状態変更
    },
};
// mutations
const mutations: MutationTree<State> = {
    // 一覧 設定
    setTeams: (state: State, all: State['all']) => {state.all = all; },
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
