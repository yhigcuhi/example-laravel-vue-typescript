<script setup lang="ts">
/* vuex */
import {useStore} from '@/store';

// 表示引数
const props = defineProps<{title: string}>();
// グローバルストア
const store = useStore();
// 初回実行 ヘッダータイトル更新
store.dispatch('header/updateHeaderTitle', props.title);
</script>
<template></template>
