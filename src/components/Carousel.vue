<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()

const video = [
    'test1',
    'test2',
    'test3',
    'test4',
    'test5'
]

const getVideoUrl = (video: string) => (
	new URL(`/src/assets/video/${video}.mp4`, import.meta.url).href
)
</script>

<template>

	<div class="carousel" v-if="width < 768">
        <swiper-container>
            <swiper-slide v-for="v in video.map(video => getVideoUrl(video))">
                
            </swiper-slide>
        </swiper-container>
    </div>

</template>

<style scoped lang="scss">
</style>

