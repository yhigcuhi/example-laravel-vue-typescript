<script setup lang="ts">
// 画面表示引数
defineProps<{ title?: string, subTitle?: string }>();
</script>
<template>
    <div class="card">
        <div class="card-image" v-if="$slots.image">
            <slot name="image"></slot>
        </div>
        <div class="card-header" v-if="$slots.header || title">
            <slot name="header">
                <h4 class="card-title">{{ title }}</h4>
                <p class="card-category" v-if="subTitle">{{ subTitle }}</p>
            </slot>
        </div>
        <div class="card-body" v-if="$slots.default">
            <slot></slot>
        </div>
        <slot name="raw-content"></slot>
        <div class="card-footer" v-if="$slots.footer">
            <hr />
            <slot name="footer"></slot>
        </div>
    </div>
</template>
