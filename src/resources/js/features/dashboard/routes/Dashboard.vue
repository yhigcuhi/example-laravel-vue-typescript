<script setup lang="ts">
// ダッシュボード画面
/* import 部品 */
import {Row} from '@/components/elements';
import IconCard from '../components/IconCard.vue';
</script>
<template>
    <div class="mx-auto">
        <!-- ダッシュボードメニュー -->
        <Row>
            <span class="col-3 mr-4">
                <router-link :to="{ name: 'players'}">
                    <IconCard icon="users" text="チーム・選手" />
                </router-link>
            </span>
            <span class="col-3 mr-4">
                <router-link :to="{ name: 'players'}">
                    <IconCard icon="calendar-days" text="選手・予定表 TODO" />
                </router-link>
            </span>
        </Row>
    </div>
</template>
