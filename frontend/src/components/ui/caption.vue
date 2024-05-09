<template>
  <Typography
    tag="p"
    class="relative animate-shiny-badge-slide mb-4 inline-block overflow-hidden text-pretty rounded-full border border-[#6919ff4d] bg-[#6919ff1a] px-4 py-1 font-medium uppercase text-[#6919ff] backdrop-blur-sm after:absolute after:inset-0 after:bg-[#6919ff1a] max-md:text-sm"
  >
    <slot />
  </Typography>
</template>

<script setup lang="ts">
     import Typography from '@/components/ui/typography.vue';
</script>