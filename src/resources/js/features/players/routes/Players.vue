<script setup lang="ts">
/* import vue*/
import {reactive} from 'vue';
/* import 部品*/
import {Row, Header} from '@/components/elements'
import {PlayersSearch, PlayersTable} from '../components';

// フォームの値監視
const condition = reactive({
    belong_team_cd: void 0 // 所属チーム
});
</script>
<template>
    <div class="mx-auto">
        <Header title="選手一覧" />
        <!-- 検索条件 -->
        <Row class="my-4">
            <PlayersSearch v-model="condition.belong_team_cd"/>
        </Row>
        <!-- 選手一覧 -->
        <Row class="my-4">
            <PlayersTable :belong_team_cd="condition.belong_team_cd"/>
        </Row>
    </div>
</template>
