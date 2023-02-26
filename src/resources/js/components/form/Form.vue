<script setup lang="ts">
/* import formkit*/
import {FormKit} from '@formkit/vue';
/* import 部品*/
import FormGroup from './FormGroup.vue'
</script>
<template>
    <FormKit type="form">
        <FormGroup>
            <slot></slot>
        </FormGroup>
    </FormKit>
</template>
