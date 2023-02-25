<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

defineProps<{ 
    images: string[]
    videoSrc: string
}>()

const { width } = useWindowSize()
</script>

<template>

	<div class="panels" v-if="width >= 768">
        <div class="panel" v-for="i in 4">
            <img
                class="test"
                v-if="i < 4"
                :src="images[i - 1]" 
                alt="panel"
            >
            <video
                v-else
                autoplay 
                muted 
                loop 
                type="video/mp4" 
                :src="videoSrc"
            />
        </div>
    </div>

</template>

<style scoped lang="scss">
.panels {
    width: 40vw;
    aspect-ratio: 40 / 30;
    position: absolute;
    z-index: -1;
    @include maxWidthSize($screen-lg) { width: 43vw }
}

.panel {
    width: 24vw;
    height: 14vw;
    position: absolute;
    overflow: hidden;
    background-color: red;

    &:nth-child(1) {
        right: -53%;
        top: .3%;
    }    
    &:nth-child(2) {
        right: -40.5%;
        top: 15.3%;
        z-index: -2;
    }
    &:nth-child(3) {
        bottom: .3%;
        left: -52.6%;
    }
    &:nth-child(4) {
        bottom: 13.8%;
        left: -40.2%;
        z-index: -2;
    }

    @include maxWidthSize($screen-lg) { 
        width: 28vw;
        height: 16.5vw;
    }
}

img, video {
    width: 100%;
    height: inherit;
    transition-timing-function: ease;
    transition-property: opacity, transform;
    transition-duration: 700ms;
    will-change: transform, opacity;
}
</style>

