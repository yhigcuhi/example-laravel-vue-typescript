<script setup lang="ts">
/* import vue*/
import {computed} from 'vue';
/* import vuex*/
import {useStore} from '@/store';
/* import 部品*/
import {SelectBox} from '@/components/elements';
/* import util*/
import {map} from 'lodash';

// 画面表示引数
const props = defineProps<{useValidation?: boolean}>(); // バリデーション実行するしない

// store
const store = useStore();
// 入力補完
// 選択値
const options = computed(() => {
    // チーム一覧取得
    const teams = store.state.teams.all; // 素のvuex.gettersではなく stateアクセスでデータ取ってくる
    // 選択オプションの形へ
    return map(teams, ({team_cd, name}) => ({value: team_cd, label: name}));
});
// 一覧取得
store.dispatch('teams/fetchAll');
</script>

<template>
    <SelectBox
        placeholder="チームを選択してください"
        :options="options"
        :validation="props.useValidation ? 'required' : void 0"
        :validation-message="{
            'required': '所属チームの選択は必須です'
        }"
    />
</template>
