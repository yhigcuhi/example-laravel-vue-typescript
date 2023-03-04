<script setup lang="ts">
/* import vue*/
import {computed} from 'vue';
/* import router*/
import {useRoute, useRouter} from 'vue-router';
/* import store*/
import {useStore} from '@/store';
/* import 部品*/
import {Card, Header} from '@/components/elements';
import {CreatePlayer} from '../components';
/* import util*/
import {isArray} from 'lodash';

// ルーター
const route = useRoute();
const router = useRouter();
// ルーターパラメーター解析
const belong_team_cd = computed<string|null>(() => isArray(route.query.belong_team_cd) ? route.query.belong_team_cd[0] : route.query.belong_team_cd);

// グローバルストア
const store = useStore();
// イベントハンドリング
/**
 * submit ハンドラー
 * @param data 正常登録値
 */
const onSubmit = async (data: object) => {
    // 登録 通信
    await store.dispatch('players/createPlayer', data);
    // 通信結果エラーハンドラー TODO:やる気あれば
    // 成功
    await router.push({name: 'players'});
}
</script>
<template>
    <div class="mx-auto">
        <Header title="選手登録" />
        <Card title="選手登録">
            <template #default>
                <!-- 登録フォーム -->
                <CreatePlayer
                    @submit="onSubmit"
                    :belong_team_cd="belong_team_cd"
                />
            </template>
        </Card>
    </div>
</template>
