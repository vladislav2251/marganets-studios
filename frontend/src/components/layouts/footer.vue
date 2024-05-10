<template>
     <footer aria-label="Primary" class="relative z-10 w-full border-t border-[#2e364f]  bg-[#060918] py-3">
          <Container>
               <div class="flex justify-center py-12">
                    <router-link to="/" title="Navigate home" data-astro-prefetch class="hover:animate-jiggle text-[18px]">
                         <Typography tag="span" bold="bold"> MARGANETS</Typography> STUDIOS
                    </router-link>
               </div>

               <hr className="h-px border-0 bg-gradient-to-r from-transparent via-[#2e364f] to-transparent" />

               <nav aria-label="Primary" className="flex flex-wrap justify-center gap-6 py-12">
                    <router-link :to="element.path" :key="i" class="text-sm uppercase text-[#96A1BF] transition-colors hover:text-[#F0F2FE] focus-visible:text-[#F0F2FE]" v-for="(element, i) in primaryLinks">
                         {{ element.label }}
                    </router-link>
               </nav>

               <hr className="h-px border-0 bg-gradient-to-r from-transparent via-[#2e364f] to-transparent" />

               <div class="grid grid-cols-1 items-center justify-center gap-6 py-12 lg:grid-cols-3">
                    <nav aria-label="Secondary" className="flex flex-wrap justify-center gap-6 lg:order-last lg:justify-end">
                         <a className="text-xs uppercase text-[#96A1BF] transition-colors hover:text-[#F0F2FE] focus-visible:text-[#F0F2FE]" :key="i" :href="element.path" v-for="(element, i) in secondaryLinks">
                              {{ element.label }}
                         </a>
                    </nav>

                    <ul aria-label="Socials" className="flex flex-wrap justify-center gap-2">
                         <li v-for="(element, i) in socials" :key="i">
                              <router-link :to="element.path" :title="element.label" :aria-label="element.label" class="text-[#96A1BF] transition-colors hover:text-[#F0F2FE] focus-visible:text-[#F0F2FE]">
                                   <Icons size="xs" :name="element.icon"/>
                              </router-link>
                         </li>
                    </ul>

                    <div className="flex justify-center lg:order-first lg:justify-start">
                         <small className="text-xs text-[#96A1BF]">&copy; {{currentYear}} MARGANETS STUDIOS</small>
                    </div>
               </div>
          </Container>
     </footer>
</template>

<script setup lang="ts">
     import { ref } from 'vue';

     import Container from '@/components/ui/container.vue';
     import Icons from '@/components/ui/icons.vue';
     import siteConfig from '@/config/site';

     const currentYear = ref(new Date().getFullYear());

     const primaryLinks = ref([
          { label: 'About', path: '/#about' },
          { label: 'Work', path: '/#work' },
          { label: 'Customer Stories', path: '/#stories' },
          { label: 'Contact', path: '/#contact' },
     ]);

     const secondaryLinks = ref([
          { label: 'Imprint', path: '/imprint' },
     ]);

     const socials = ref([
          { label: 'View Instagram profile', path: siteConfig.links.instagram, icon: 'instagram' },
          { label: 'View LinkedIn profile', path: siteConfig.links.linkedin, icon: 'linked' },
          { label: 'View Dribbble profile', path: siteConfig.links.dribbble, icon: 'dribble'  },
          { label: 'View Behance profile', path: siteConfig.links.behance, icon: 'behance'  },
     ]);
</script>