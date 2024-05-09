<template>
     <transition>
          <div class="fixed inset-0 -z-10 bg-[#060918e6] backdrop-blur-sm lg:hidden" v-if="isOpen"></div>
     </transition>
</template>

<script setup lang="ts">
     
     interface IMobileNavigationOverlayProps {
          isOpen: boolean;
     };

     const props = defineProps<IMobileNavigationOverlayProps>();
</script>