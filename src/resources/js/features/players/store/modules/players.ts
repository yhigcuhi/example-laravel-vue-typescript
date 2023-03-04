/*********************************************
 * Players Vuex 管理
 *********************************************/
/* import api*/
import {createPlayer, getPlayers} from '../../api'
/* import util*/
import {filter, isEmpty} from 'lodash';
/* for types*/
import {ActionTree, GetterTree, MutationTree, Module} from 'vuex';
import {PlayerEntity} from '../../types';
import {RootState} from '@/store';

/*********************************************
 * store 定義
 *********************************************/
// state 定義
type State = { all: PlayerEntity[], fetched: boolean, processing: boolean};
// 管理物
const state : State = {
    all: [], // 選手一覧
    fetched: false, // 取得済み
    processing: false, // 送信中: false(未送信)/true(送信中)
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
        if (state.fetched) return; // 初回フェッチだけ
        if (state.processing) return; // 処理中 何もしない
        // 送信中
        commit('processing');

        // 一覧 GET -> 内部状態変更
        const response = await getPlayers(); // 一覧 取得
        if (response?.data?.length) commit('setPlayers', response.data); // 内部状態変更
        // TODO:送信エラー

        // 送信完了
        commit('fetched');
        commit('processed');
    },
    // 選手 登録
    async createPlayer({state, commit}, data: object) {
        // 前提条件
        if (isEmpty(data)) return; // から何もしない
        if (state.processing) return; // 処理中 何もしない
        // 送信中
        commit('processing');

        // 登録 POST -> 内部状態変更
        const response = await createPlayer(data); // 一覧 取得
        if (response?.data?.length) commit('addPlayer', response.data); // 内部状態変更
        // TODO:送信エラー

        // 送信完了
        commit('processed');
    },
};
// mutations
const mutations: MutationTree<State> = {
    // 一覧 設定
    setPlayers: (state: State, all: PlayerEntity[]) => {state.all = all; },
    // 選手追加
    addPlayer: (state: State, player: PlayerEntity) => {state.all.push(player); },
    // 未フェッチ
    unfetch: (state: State) => state.fetched = false,
    // フェッチ済み
    fetched: (state: State) => state.fetched = true,
    // 送信中
    processing: (state: State) => state.processing = true,
    // 送信完了
    processed: (state: State) => state.processing = false,
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
