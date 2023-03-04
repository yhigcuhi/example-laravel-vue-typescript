<script setup lang="ts">
/* import vue*/
import {computed, PropType} from 'vue';
/* import util*/
import {isArray, isEmpty} from 'lodash';
/* for types*/
import {FormKitOptionsItem, FormKitOptionsProp} from '@formkit/inputs';
import {FormKitClasses} from '@formkit/core';

/* type 定義 */
// 画面表示引数
type Props = {
    defaultOption?: FormKitOptionsItem|string // デフォルト選択値オプション
    options?: FormKitOptionsProp // 選択肢
    classes?: Record<string, string | Record<string, boolean> | FormKitClasses> // デザイン
}
const props = defineProps<Props>();

// 入力補完
const options = computed(() => { // 選択オプション補完
    // 前提条件
    if (isEmpty(props.defaultOption)) return props.options; // デフォルトオプションない場合 何もしない
    // デフォルトオプション補完
    const defaultOption = typeof props.defaultOption !== 'string' ? props.defaultOption : {value: null, label: props.defaultOption, class: 'text-secondary'};
    // 選択肢の一覧の先頭に デフォルトオプション追加
    return isArray(props.options) ? [defaultOption, ...props.options] : {...defaultOption, ...props.options};
});
// デフォルトデザイン反映
const classes = computed(() => ({input: 'form-control border-input', ...props.classes}))
</script>

<template>
    <FormKit type="select" :options="options" :classes="classes"/>
</template>
