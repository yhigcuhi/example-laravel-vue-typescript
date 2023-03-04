<script setup lang="ts">
/*import 部品*/
import {Button} from '@/components/elements';
import Icon from '@/components/elements/icon/Icon.vue';
// 画面表示引数
const props = defineProps<{text?: string}>(); // ボタン表示テキスト
</script>
<template>
    <Button v-if="props.text" bg="info">
        <Icon icon="plus" class="mr-2"/>
        {{ props.text }}
    </Button>
    <Button v-else>
        <Icon icon="plus" class="mr-2"/>
        <slot />
    </Button>
</template>
