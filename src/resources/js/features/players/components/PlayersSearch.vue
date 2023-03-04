<script setup lang="ts">
/* import vue*/
import {computed} from 'vue';
/* import 部品*/
import {Card, Label} from '@/components/elements'
import {FormGroup} from '@/components/form';
import {TeamSelectBox} from '@/features/teams';

// // 画面引数
const props = withDefaults(defineProps<{ modelValue?: string|null }>(), {
        // 初期表示 モデル値
        modelValue: null,
});
// input 内容変更 → モデルの値 通知 処理定義
const emit = defineEmits(['update:modelValue']);
// 選択 値
const selected = computed({
    // getter
    get() { return props.modelValue; },
    // setter
    set(val) { emit('update:modelValue', val); }, // 値変更通知
});
</script>
<template>
    <Card title="選手 検索">
        <template #default>
            <FormGroup>
                <TeamSelectBox v-model="selected" default-option="チームを選択してください"/>
            </FormGroup>
        </template>
    </Card>
</template>
