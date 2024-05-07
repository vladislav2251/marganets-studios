<template>
        <component 
                :is="tag"
                :class="['typography', size ? `text-[${size}px]` : '', bold ? `font-${bold}`: '', `tag_${tag}`]"
        >

                <slot />
        </component>
</template>

<script setup lang="ts">
        interface IProps {
                bold?: 'font-light' | 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold' | 'font-extrabold';
                size: '13' | '16' | '32' | '78';
                tag: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
        };

        const props = defineProps<IProps>();
</script>