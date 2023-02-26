<script setup lang="ts">
/* import 部品*/
import MainSideMenu from './MainSideMenu.vue'
import MainHeader from './MainHeader.vue';
</script>
<template>
    <!-- wrapper -->
    <div class="wrapper">
        <!-- side menu-->
        <MainSideMenu />
        <!-- main contents -->
        <div class="main-panel">
            <!-- main header -->
            <MainHeader />
            <!-- main contents -->
            <div class="content">
                <div class="container-fluid">
                    <slot />
                </div>
            </div>
        </div>
        <!-- main footer -->
        <div class="d-flex flex-column col-12">
            Footer
        </div>
    </div>
</template>
