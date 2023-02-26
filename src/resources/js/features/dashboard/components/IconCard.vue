<script setup lang="ts">
/* import 部品 */
import {Icon, Card} from '@/components/elements';
import {Color} from '@/@types';
// 画面表示引数
type Props = {
    icon: string|string[] // font awesome icon
    text?: string // アイコンテキスト
    color?: Color // 文字カラー
}
const props = withDefaults(defineProps<Props>(),
    {
        color: 'info', //カラーデフォルト
    }
);

</script>
<template>
    <!-- for Dashboard Icon card  -->
    <Card>
        <template #default>
            <div class="icon-big text-center" :class="`icon-${props.color}`">
                <Icon :icon="props.icon" />
                <p class="mt-2 font-weight-bold" v-if="props.text">{{ props.text }}</p>
                <span class="mt-2" v-else-if="$slots.default"><slot /></span>
            </div>
        </template>
    </Card>
</template>

