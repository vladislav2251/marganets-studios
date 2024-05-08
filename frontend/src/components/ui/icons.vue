<template>
    <img 
        :class="[sizeClass, 'inline-block']" 
        :src="`/svg/${props.name}.svg`" 
        :alt="props.name"
    >
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import type { IIconProps } from '@/interfaces/icon.interface';

    const props = defineProps<IIconProps>()

    const sizeClass = computed(() => {
        return {
            xs: 'w-3 h-3',
            sm: 'w-4 h-4',
            md: 'w-6 h-6',
            lg: 'w-8 h-8',
            xl: 'w-10 h-10',
        }[props.size]
    });
</script>