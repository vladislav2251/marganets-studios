<template>
        <div :class="classes" ref="containerRef" v-bind="$attrs">
                <slot />
        </div>
</template>

<script setup lang="ts">
        import { ref, computed } from 'vue';

        interface IContainerProps {
                class?: string;
        };

        const contianerRef = ref<HTMLDivElement | null>(null);

        const props = defineProps<IContainerProps>();

        const classes = computed(() => {
                return [
                        'mx-auto',
                        'w-11/12',
                        'max-w-7xl',
                        '2xl:w-4/5',
                        props.class || '',
                ].join(' ');
        });
</script>