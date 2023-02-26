<script setup lang="ts">
/* import 部品*/
import {InputText} from '@/components/form';
</script>
<template>
    <!-- 名前(姓名)の入力 -->
    <InputText validation="required|length:1,15" />
</template>
