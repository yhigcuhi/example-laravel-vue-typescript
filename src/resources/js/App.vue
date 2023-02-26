<template>
    <!-- 各画面 ※一旦SPAとして組んでいるので MPAやLaravel Routerならよしなに -->
    <MainLayouts>
        <router-view />
    </MainLayouts>
</template>
<script setup lang="ts">
import MainLayouts from '@/components/layouts/MainLayouts.vue';
</script>
