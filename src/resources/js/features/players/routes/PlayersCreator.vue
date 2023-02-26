<script setup lang="ts">
/* import 部品*/
import {Card} from '@/components/elements';
import {CreatePlayer} from '../components';
/* for types*/
import {PlayerEntity} from '@/features/players/types';

// 画面表示引数
const props = defineProps<{belong_team_cd?: PlayerEntity['belong_team_cd']}>();
// イベントハンドラー
const onSubmit = (_data, _node) => {
    console.log('TODO 登録・更新処理', _data, _node)
}
</script>
<template>
    <div class="mx-auto">
        <Card title="選手登録">
            <template #default>
                <!-- 登録フォーム -->
                <CreatePlayer @submit.prevent="onSubmit" />
            </template>
        </Card>
    </div>
</template>
