<script setup lang="ts">
/* import vue*/
import {computed} from 'vue';
/* import formkit*/
import {FormKit} from '@formkit/vue';
/* import 部品*/
import FormGroup from './FormGroup.vue';
/* for types*/
import {Color} from '@/@types';

// 画面表示引数
type Props = {
    submitAttrs?: Record<string, any>
    buttonColor?: Color // ボタンカラー
}
const props = withDefaults(defineProps<Props>(), {
    buttonColor: 'info',
});
// 入力補完
const submitAttrs = computed(() =>
    ({
        inputClass: `px-4 py-2 text-center border rounded text-white bg-${props.buttonColor}`, // デフォルトデザイン
        ...props.submitAttrs, // 引数反映
    })
);
</script>
<template>
    <FormKit type="form" :submitAttrs="submitAttrs">
        <FormGroup>
            <slot></slot>
        </FormGroup>
    </FormKit>
</template>
