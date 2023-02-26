/*********************************************
 * Players Vuex 管理
 *********************************************/
/* import api*/
import {getPlayers} from '../../api'
/* import util*/
import {filter} from 'lodash';
/* for types*/
import {ActionTree, GetterTree, MutationTree, Module} from 'vuex';
import {PlayerEntity} from '../../types';
import {RootState} from '@/store';

/*********************************************
 * store 定義
 *********************************************/
// state 定義
type State = { all: PlayerEntity[] };
// 管理物
const state : State = {
    all: [], // 選手一覧
}
// getter
const getters: GetterTree<State, RootState> = {
    // 指定所属チームコードの選手一覧
    findByBelongTeamCd: (state: State): (belong_team_cd?: PlayerEntity['belong_team_cd']) => PlayerEntity[] => (_belong_team_cd) => {
        // 指定所属チームコードの選手一覧
        return filter(state.all, ({belong_team_cd}) => belong_team_cd === _belong_team_cd);
    },
};
// getter
const actions: ActionTree<State, RootState> = {
    // 一覧 最新化
    async fetchAll({state, commit}) {
        // 前提条件
        if (state.all.length) return; // 取得済み 不要

        // 一覧 GET -> 内部状態変更
        const response = await getPlayers(); // 一覧 取得
        if (response?.data?.length) commit('setPlayers', response.data); // 内部状態変更
    },
};
// mutations
const mutations: MutationTree<State> = {
    // 一覧 設定
    setPlayers: (state: State, all: State['all']) => {state.all = all; },
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
