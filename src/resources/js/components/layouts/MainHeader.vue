<script setup lang="ts">
/* import vue*/
import {computed} from 'vue';
/* import vuex*/
import {useStore} from '@/store';
/* import 部品*/
import {Toggle} from '@/components/elements';

/* イベント定義*/
const emits = defineEmits(['clickToggle'])
/* 内部利用変数 */
// グローバルストア
const store = useStore()
const title = computed(() => store.state.header.title); // タイトル名
/* イベントハンドリング*/
const handleOnClickToggle = () => emits('clickToggle'); // トグルクリック
</script>

<template>
    <!-- header -->
    <nav class="navbar navbar-expand-lg navbar-light">
        <!-- header メニュー wrapper -->
        <div class="container-fluid">
            <!-- 画面表示名 -->
            <a href="#" class="navbar-brand">{{ title }}</a>
            <!-- スマホ用の -->
            <Toggle aria-label="Toggle navigation" @click="handleOnClickToggle" />
            <!-- ヘッダーメニュ -->
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="ti-panel"></i><p>TODO:ログインとか</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
