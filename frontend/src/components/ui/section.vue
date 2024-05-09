<template>
     <section v-bind="$attrs" :class="[
          'relative z-10 w-full bg-[] py-32 flex flex-col justify-center min-h-screen',

          hasBorderTop && 'before:inset-x-0 before:h-px before:absolute before:w-4/5 before:top-0 before:-z-10 before:bg-gradient-to-r before:from-transparent before:via-neutrals-600 before:to-transparent before:max-w-7xl before:mx-auto',
          hasGlowEffect && 'after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:mx-auto after:h-full after:w-full after:max-w-7xl after:bg-[radial-gradient(40%_36%_at_50%_0%,rgba(105,25,255,0.04)_0%,rgba(105,25,255,0)_100%,rgba(105,25,255,0)_100%),radial-gradient(32%_20%_at_50%_32%,rgba(105,25,255,0.08)_0%,rgba(105,25,255,0)_100%)]',
     ]">
          <slot />
     </section>
</template>

<script setup lang="ts">

     import { ref, computed } from 'vue';

     interface ISectionProps {
          hasBorderTop: boolean;
          hasGlowEffect: boolean;
     };

     const props = defineProps<ISectionProps>();

</script>