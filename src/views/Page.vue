<script setup lang="ts">
import Roll from '@/components/Roll.vue'
import Panels from '@/components/Panels.vue'

defineProps<{
    title: string[]
	subTitles: string[]
	info: string[]
	images: string[]
	video: string
	color: string
}>()

const getImgUrl = (img: string) => (
	new URL(`/src/assets/images/${img}`, import.meta.url).href
)

const getVideoUrl = (video: string) => (
	new URL(`/src/assets/video/${video}`, import.meta.url).href
)
</script>

<template>

	<main>
		<div class="title">
			<Roll
				as="h1"
				:content="title[0]"
				:style="{ color: color }"
			/>

			<Roll
				as="h1"
				:content="title[1]"
				:style="{ color: color }"
				delay="60ms"
			/>

			<Roll
				class="link"
				as="a"
				href=""
				content="More"
			/>
		</div>

		<div class="bottom">
			<div
				v-for="i in 2"
				class="container"
			>
				<Roll
					class="subtitle"
					:content="subTitles[i - 1]"
					:style="{ color: color }"
				/>
				<Roll
					class="info"
					:content="info[i - 1]"
				/>
			</div>
		</div>

		<Panels
			:images="images.map(img => getImgUrl(img))"
			:video-src="getVideoUrl(video)"
		/>
	</main>

</template>

<style scoped lang="scss">
main {
	height: var(--full-vh);
	@include flex-center();
}

h1 {
	font-size: 14vw;
	text-transform: uppercase;
	user-select: none;
	font-family: 'manuka-bold';
	text-align: center;

	@include maxWidthSize($screen-lg) { font-size: 16.5vw }
    @include maxWidthSize($screen-md) { font-size: 80px }
}

.link {
	@include abs-center-x();
	bottom: -30px;
	z-index: 1;
	& :deep(.roller) {
		text-transform: uppercase;
		font-size: 12px;
		opacity: .9;
	}
}

.bottom {
	@include vert-fixed($bottom: 0);
	@include space-between();
	@include maxWidthSize($screen-lg) { display: none }
	width: 100%;
	padding: 64px 32px 32px;
}

.subtitle {
	text-transform: uppercase;
	margin-bottom: 6px;
	font-size: 13px;
}
.info { font-family: 'roboto-mono' }

.container:nth-of-type(2) { text-align: right }

.v-enter-active,
.v-leave-active {
	transition-duration: .7s;
	position: absolute;
	width: 100%;
	left: 0;
}


.v-enter-to :deep(.roller),
.v-enter-from :deep(.roller) {
	transform: translateY(100%)
}

.v-leave-to :deep(.roller) { transform: translateY(-100%) }


.v-enter-from :deep(.test) {
	transform: scale(1.2);
	opacity: 0;
}
</style>

