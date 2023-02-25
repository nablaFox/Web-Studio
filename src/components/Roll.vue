<script setup lang="ts">
defineProps<{ 
    content?: string
    as?: string
    translate?: string
    delay?: string
}>()

</script>


<template>

    <component 
        class="roll"
        :is="as || 'div'"
    >
        <div 
            class="roller"
            :style="{ 
                transform: translate ? `translateY(${translate})` : undefined,
                transitionDelay: delay
            }"
        >
            <slot> {{ content }} </slot>
        </div>
    </component>

</template>

<style scoped>
.roll { overflow-y: hidden; display: block; }

.roller {
    transition: transform .7s  cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
}
</style>