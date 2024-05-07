<template>
        <img 
                :src="src" 
                :width="width" 
                :height="height" 
                :alt="alt" 
                :loading="isAboveTheFold ? 'eager' : 'lazy'" 
                decoding="async"
        >
</template>

<script setup lang="ts">
        import { defineProps, ref } from 'vue';
        import type { IImageProps } from '@/interfaces/image.interface';

        const props = defineProps<IImageProps>();

        const src = ref<string>(props.metadata.src);
        const width = ref<number>(props.metadata.width);
        const height = ref<number>(props.metadata.height);
        const isAboveTheFold = ref<boolean>(!!props.isAboveTheFold);
        
</script>
