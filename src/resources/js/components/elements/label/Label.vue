<script setup lang="ts">
defineProps(['value']);
// TODO: labelデザイン今後
</script>
<template>
    <label>
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
