<script setup lang="ts">
// 画面表示引数
type Props = {
    type?: 'striped' | 'hover' // 表のタイプ (striped:線あり, hover:ホバー系?)
    columns?: string[] // 表題一覧
    data?: Array<Record<string, any>> // 表データ
}
const props = withDefaults(defineProps<Props>(), {
    type: 'striped', // デフォルト 線ありの表
});
</script>
<template>
    <!-- 表基本デザイン -->
    <table class="table" :class="`table-${props.type}`">
        <!-- 表題 -->
        <thead v-if="props.columns?.length">
            <slot name="columns">
                <th v-for="column in columns" :key="column">
                    {{ column }}
                </th>
            </slot>
        </thead>
        <!-- 表 -->
        <tbody v-if="props.data?.length">
            <!-- 行 -->
            <tr v-for="(item, index) in props.data" :key="index">
                <slot :row="item">
                    <!-- セル -->
                    <td v-for="(key, index) in Object.keys(item)" :key="index">
                        {{ item[key] }}
                    </td>
                </slot>
            </tr>
        </tbody>
    </table>
</template>


<style scoped>

</style>
