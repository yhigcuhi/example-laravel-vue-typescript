<script setup lang="ts">
// 画面表示引数
import {Color} from '@/@types';

const props = withDefaults(defineProps<{ type: string, bg?: Color}>(), {
    type: 'submit',
    bg: 'primary'
});
</script>
<template>
    <button :type="props.type" class="px-4 py-2 text-center border rounded text-white" :class="`bg-${bg}`">
        <slot />
    </button>
</template>
