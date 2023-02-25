<script setup lang="ts">
import { ref } from 'vue'
import Roll from './Roll.vue'

const opened = ref(false)

const open = () => (opened.value = true)
const close = () => (opened.value = false)

defineExpose({ opened, open, close })
</script>


<template>

    <Transition>
        <div class="menu" v-if="opened">
            <div class="links">
                <Roll
                    as="a"
                    href=""
                    class="link" 
                    content="About"
                />
                <Roll
                    as="a"
                    href=""
                    class="link" 
                    content="Archive"
                />
            </div>

            <div class="socials">
                <a
                    v-for="social in ['Github', 'Twitter', 'Linkedin']"
                    class="social"
                    href=""
                >
                    <Roll
                        class="social"
                        :content="social" 
                    />
                </a>
            </div>
        </div>
    </Transition>

</template>

<style scoped lang="scss">
.menu {
    width: 100%;
    left: 0;
    height: 100%;
    position: absolute;
    z-index: 99901;
    background-color: var(--color-background);
    @include maxWidthSize($screen-lg) {
        @include flex-center();
        justify-content: flex-start;
        padding-left: 24px;
    }
}

.links {
    padding: 134px 0 0 70%;
    @include maxWidthSize($screen-lg) { padding: 0 }
}

.link {
    font-size: 100px;
    text-transform: uppercase;
    font-family: 'manuka';
    margin-bottom: 42px;
}

.socials {
    @include vert-fixed($bottom: 0);
    position: absolute;
    width: 100%;

    display: flex;
	justify-content: end;
    align-items: center;
    padding: 32px 32px 24px;
    @include maxWidthSize($screen-lg) {
        justify-content: space-between;
    }
}

.social {
    &:not(:last-child) { margin-right: 64px };
    font-family: 'roboto-mono';
    @include maxWidthSize($screen-lg) {
        margin-right: 0!important;
    }
}

.v-enter-active,
.v-leave-active {
	transition: opacity .7s ease;
	width: 100%;
	position: absolute;
	left: 0;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-to :deep(.roller),
.v-enter-from :deep(.roller),
.v-leave-to :deep(.roller) {
	transform: translateY(100%)
}
</style>