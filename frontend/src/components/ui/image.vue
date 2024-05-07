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

        interface ImageMetodata {
                src: string;
                width: number;
                height: number;
        };

        interface ImageProps {
                metadata: ImageMetodata;
                alt: string;
                isAboveTheFold?: boolean;
        };

        const props = defineProps<ImageProps>();

        const src = ref<string>(props.metadata.src);
        const width = ref(props.metadata.width);
        const height = ref(props.metadata.height);
        const isAboveTheFold = ref(!!props.isAboveTheFold);
</script>
