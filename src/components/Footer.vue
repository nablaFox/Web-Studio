<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { register } from 'swiper/element/bundle'
import { useWindowSize } from '@vueuse/core'
import Arrow from './Icons/Arrow.vue'

const props = defineProps<{ pageIndex: number }>()
defineEmits<{ 
    (e: 'change', index: number): void
    (e: 'nextPage'): void
    (e: 'prevPage'): void
}>()

const { width } = useWindowSize()
const swiper = ref<any>(null)

const destinations = [
    { image: 'test7.png', href: '/' },
    { image: 'test8.png', href: '/about' },
    { image: 'test6.png', href: '/collaboration' },
    { image: 'test5.jpg', href: '/work' }
]

const getImgUrl = (img: string) => (
	new URL(`/src/assets/images/${img}`, import.meta.url).href
)

watch(
    props,
    now => (swiper.value.allowSlideNext = now.pageIndex > 2)
)
onMounted(() => (swiper.value.allowSlideNext = false))
register()
</script>

<template>
    
    <footer>
        <swiper-container
            ref="swiper"
            :spaceBetween="10"
            :slidesPerView="3"
            :breakpoints="{
                685: { slidesPerView: 4 }
            }"
            :navigation="{
                nextEl: '.next-btn',
                prevEl: '.prev-btn'
            }"
        >
            <swiper-slide v-for="dest, i in destinations">
                <RouterLink :to="dest.href">
                    <img
                        :src="getImgUrl(dest.image)" 
                        class="thumbnail"
                        alt="thumbnail"
                        width="64"
                        height="40"
                        @click="$emit('change', i)" 
                    >
                </RouterLink>
            </swiper-slide>
        </swiper-container>
        <Arrow 
            class="prev-btn"
            :style="{ opacity: pageIndex > 0 ? '1' : undefined }"
            @click="$emit('prevPage')"
        />
        <Arrow
            class="next-btn"
            direction="left"
            @click="$emit('nextPage')" 
        />
        <div 
            class="index"
            :style="{ 
                transform: pageIndex > 2 && width <= 685 ?
                    'translateX(146px)' : 
                    `translateX(${pageIndex * 73}px)`
            }"
        />
    </footer>

</template>


<style scoped lang="scss">
.thumbnail {
    @include maxWidthSize(685px) { height: 35px }
}

footer {
    @include abs-center-x();
    @include minWidthSize(685px) { width: 276px };
    gap: 10px;
    width: 212px;
    bottom: 32px;
    position: fixed;
}

.next-btn,
.prev-btn {
    @include abs-center-y();
}

.next-btn { right: -30px }
.prev-btn { left: -30px }
.swiper-button-disabled { opacity: .4 }

.index {
    width: 40px;
    height: 50px;
    will-change: transform;
    z-index: 1;
    border: 1px solid white;
    position: absolute;
    transform: translateX(73px);
    left: 12px;
    top: -7px;
    transition: transform 700ms cubic-bezier(.34,.52,0,1);
    @include minWidthSize(685px) { top: -5px }
}
</style>
