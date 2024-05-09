<template>
     <transition>
          <div class="border-neutrals-600 py-4 lg:hidden" v-if="isOpen">
               <Container>
                    <nav class="flex flex-col justify-center divide-y divide-[#2e364f]">
                         <router-link 
                              :to="element.path" 
                              :key="i" 
                              v-for="(element, i) in props.links" 
                              class="py-4 ps-2 uppercase text-[#fffef9] transition-[letter-spacing,color] hover:tracking-wider hover:text-[#f0f2fe] focus-visible:tracking-wider focus-visible:text-[#f0f2fe]"
                         >
                         
                              {{ element.label }}
                         </router-link>
                    </nav>
               </Container>
          </div>
     </transition>
     
     <MobileNavigationOverlay :isOpen="isOpen"/>
</template>

<script setup lang="ts">
     import { ref, watch } from 'vue';

     import MobileNavigationOverlay from '@/components/layouts/components/mobile_navigation_overlay.vue';
     import Container from '@/components/ui/container.vue';

     interface ILink {
          readonly label: string;
          readonly path: string;
     };

     interface IMobileNavigationProps {
          isOpen: boolean;
          links: readonly ILink[];
     };

      const props = defineProps<IMobileNavigationProps>();

</script>