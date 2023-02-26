<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useEventListener } from '@vueuse/core'
import Carousel from './components/Carousel.vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const router = useRouter()
const pageIndex = ref(0)

watch(pageIndex, () => {
	let page = 'Home'
	
    if (pageIndex.value === 0) page = 'Home'
    else if (pageIndex.value === 1) page = 'About'
	else if (pageIndex.value === 2) page = 'Collaboration'
	else if (pageIndex.value === 3) page = 'Work'
	else if (pageIndex.value === 4) page = 'Fun'

    router.push({ name: page })
}, { immediate: true })

const onPrevPage = () => pageIndex.value > 0 && pageIndex.value--
const onNextPage = () => pageIndex.value < 4 && pageIndex.value++

const resize = () => document.documentElement.style.setProperty('--full-vh', `${window.innerHeight}px`)
useEventListener(window, 'resize', resize)
resize()
</script>

<template>

	<Header />
	<RouterView v-slot="{ Component, route }">
		<Transition>
			<component :is="Component" :key="route.path" />
		</Transition>
	</RouterView>
	<Carousel />
	<Footer
		:pageIndex="pageIndex"
		@change="i => pageIndex = i"
		@prevPage="onPrevPage"
		@nextPage="onNextPage"
	/>

</template>

<style lang="scss">

</style>
