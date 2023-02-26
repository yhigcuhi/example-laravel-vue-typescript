<script setup lang="ts">
/* import vue*/
import {computed} from 'vue';
/* import form kit*/
import {FormKit} from '@formkit/vue';
import {FormKitClasses} from '@formkit/core';
// 画面表示引数
type Props = {
    classes?: Record<string, string | Record<string, boolean> | FormKitClasses>
}
const props = defineProps<Props>();

// 入力補完
// デフォルトデザイン反映 TODO:radioのデザイン...
const classes = computed(() => ({...props.classes}))
</script>
<template>
    <FormKit :classes="classes" type="radio"/>
</template>
