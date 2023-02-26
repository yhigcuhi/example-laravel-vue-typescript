<script setup lang="ts">
/* import vue*/
import {computed} from 'vue';
/* import 部品*/
import {Radio} from '@/components/form';
import {Gender} from '../../enums/Gender';

// 選択肢
const options = computed(() => ({MEN: Gender.MEN, WOMEN: Gender.WOMEN}));
</script>
<template>
    <!-- 性別のの入力 -->
    <Radio validation="required" :options="options"/>
</template>
