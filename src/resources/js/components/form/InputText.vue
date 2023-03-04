<script setup lang="ts">
/* import vue*/
import {computed} from 'vue';
/* import form kit*/
import {FormKit} from '@formkit/vue';
import {FormKitClasses, FormKitNode} from '@formkit/core';
// 画面表示引数
type Props = {
    classes?: Record<string, string | Record<string, boolean> | FormKitClasses>
}
const props = defineProps<Props>();

// 入力補完
// デフォルトデザイン反映
const classes = computed(() => ({
    input: 'form-control border-input',
    message: 'form-control-feedback',
    ...props.classes
}));
</script>
<template>
    <FormKit :classes="classes" type="text"/>
</template>
