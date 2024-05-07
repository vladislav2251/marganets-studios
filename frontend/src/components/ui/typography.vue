<template>
        <component 
                :is="tag"
                :class="['typography', size ? `text-[${size}px]` : '', bold ? `font-${bold}`: '', `tag_${tag}`]"
        >

                <slot />
        </component>
</template>

<script setup lang="ts">
        import type { ITypographyProps } from '@/interfaces/typography.interface';

        const props = defineProps<ITypographyProps>();
</script>