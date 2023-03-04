<script setup lang="ts">
/* import vue*/
import {computed, onMounted} from 'vue';
/* import 部品*/
import {Card, Label, Table, Append} from '@/components/elements'
import {TeamEntity} from '@/features/teams/types';
/* import store*/
import {useStore} from '@/store';
/* import util*/
import {map, sortBy} from 'lodash';
/* import type*/
import {PlayerEntity} from '../types';
import {Gender} from '../enums/Gender';

// 内部利用定数
const COLUMNS = ['チーム', '名前', '性別'];
// 画面引数
const props = defineProps<{ belong_team_cd?: TeamEntity['team_cd'] }>();

// 内部利用変数
// グローバルストア
const store = useStore();
// 表示データ
const data = computed(() => {
    // 所属選手
    const players: PlayerEntity[] = !props.belong_team_cd ? store.state.players.all : store.getters['players/findByBelongTeamCd'](props.belong_team_cd);
    // ソート
    const playersSortBy = sortBy(players, ['belong_team_cd', 'id']);
    // 表示データへ整形
    return map(playersSortBy, ({belong_team: {name}, last_name, first_name, last_name_kana, first_name_kana, gender}) => (
        {
            team: name, // 所属チーム名
            name: `${last_name} ${first_name} (${last_name_kana} ${first_name_kana})`, // 選手名
            gender: Gender.valueOf(gender), // 性別
        }
    ));
});

// 最新化
store.dispatch('players/fetchAll');
</script>
<template>
    <Card>
        <!-- カードヘッダー -->
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <!-- カードタイトル -->
                <h4 class="card-title">選手 一覧</h4>
                <!-- カード ヘッダーメニュー -->
                <span class="d-flex align-items-center justify-content-between">
                    <!-- 選手追加ボタン -->
                    <router-link :to="{ name: 'players.create', query: {belong_team_cd: props.belong_team_cd} }">
                        <Append text="選手登録" />
                    </router-link>
                </span>
            </div>
        </template>
        <template #default>
            <Table :columns="COLUMNS" :data="data" />
        </template>
    </Card>
</template>
