<script setup lang="ts">
// 画面表示引数
import {Color} from '@/@types';
const props = withDefaults(defineProps<{ bg?: Color}>(), {
    bg: 'primary'
});
</script>
<template>
    <button class="px-4 py-2 text-center border rounded text-white" :class="`bg-${bg}`">
        <slot />
    </button>
</template>
