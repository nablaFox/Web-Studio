<script setup lang="ts">
import { ref } from 'vue'

import Roll from './Roll.vue'
import Menu from './Menu.vue'

const menu = ref<InstanceType<typeof Menu> | null>(null)
</script>

<template>
    <header>
        <RouterLink to="/" class="brand">
            <img src="@/assets/logo.svg" alt="Logo" class="logo" width="50">
            <div class="brand__name"> Web Studio </div>
        </RouterLink>
       
        <div class="control">
            <Roll
                class="closer"
                content="Close"
                @click="menu?.close"
                :translate="!menu?.opened ? '100%' : undefined"
                :style="{ zIndex: menu?.opened ? '1' : 'initial' }"
            />

            <Roll
                class="opener" 
                content="Menu"
                @click="menu?.open"
                :translate="menu?.opened ? '-100%' : undefined"
            />
        </div>
    </header>

    <Menu ref="menu" />
</template>


<style scoped lang="scss">
header {
    z-index: 3;
    width: 100%;
    padding: 32px 32px 0;
    align-items: center;
    @include space-between();
    max-height: 100vh;
    @include vert-fixed($top: 0);
    z-index: 99902;
}

.brand { 
    @include flex-center();
    font-family: 'Sol';
    font-size: 18.5px;
    gap: 10px;
}

.control {
    @include space-between();
    min-width: 15%;
    font-family: 'roboto-mono';
    cursor: pointer;
}

.closer {
    @include maxWidthSize($screen-md) { position: absolute }
}
</style>
