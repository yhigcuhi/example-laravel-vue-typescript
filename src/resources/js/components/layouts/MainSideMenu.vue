
<script setup lang="ts">
/* import 部品 */
import {Logo, Icon} from '@/components/elements';

// 画面表示引数
type Props = {
    themeColor?: 'black' | 'white' | 'darkblue'
}
const props = withDefaults(defineProps<Props>(), {
    themeColor: 'black', // デフォルト黒
})
</script>
<template>
    <!-- side menu -->
    <div class="sidebar" :data-background-color="props.themeColor">
        <!-- side menu wrapper -->
        <div class="sidebar-wrapper">
            <!-- ロゴ -->
            <div class="logo">
                <router-link :to="{ name: 'home'}" class="simple-text">
                    <div class="logo-img">
                        <Logo />
                    </div>
                </router-link>
            </div>
            <ul class="nav">
                <!-- サイドメニュー:リンク -->
                <li class="nav-item">
                    <router-link :to="{ name: 'home'}" class="nav-link">
                        <Icon icon="house" class="mr-3" />ホーム
                    </router-link>
                </li>
                <!-- サイドメニュー:リンク -->
                <li class="nav-item">
                    <router-link :to="{ name: 'players'}" class="nav-link">
                        <Icon icon="users" class="mr-3" />選手一覧
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
