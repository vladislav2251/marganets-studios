<template>
        <header aria-label="primary" class="fixed top-0 z-40 w-full">
                <Container>
                        <div         
                                :class="{
                                        'mt-4 rounded-full border-0.5 p-2 transition-colors duration-500 border border-[#2e364f] bg-[#06091880] backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/50': isBackgroundShown.value,
                                        'mt-4 rounded-full border-0.5 p-2 transition-colors duration-500 border-transparent border bg-transparent': !isBackgroundShown.value
                                }"
                        >

                               <div class="grid grid-cols-3">
                                        <div class="flex items-center lg:hidden">
                                                <MobileNavigationToggle 
                                                        @click:toggle="toggleMobileMenu" 
                                                        :is-background-shown="isBackgroundShown.value"
                                                />
                                        </div>

                                        <nav data-astro-prefetch aria-label="Primary"  class="ms-4 hidden items-center gap-x-6 lg:flex">
                                                <router-link 
                                                        :to="element.path" 
                                                        :key="i" 
                                                        v-for="(element, i) in links" 
                                                        class="relative flex h-full items-center p-1 text-sm uppercase text-[#fffef9] after:absolute after:inset-x-0 after:bottom-[12.25%] after:h-px after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-[#C7D0E5] after:to-transparent after:transition-transform hover:after:-scale-x-100 focus-visible:after:-scale-x-100"> 
                                                        
                                                        {{ element.label }} 
                                                </router-link>
                                        </nav>

                                        <div class="flex items-center justify-center">
                                                <router-link to="/" title="Navigate home" data-astro-prefetch class="hover:animate-jiggle text-[18px]">
                                                        <Typography tag="span" bold="bold"> MARGANETS</Typography> STUDIOS
                                                </router-link>
                                        </div>

                                        <div class="flex items-center justify-end">
                                                <Button type="link" to="/" size="small">Hit me up</Button>
                                        </div>
                               </div>
                        </div>
                </Container>

                <MobileNavigation :isOpen="isMobileMenuOpen" :links="links" :close="closeMobileMenu"/>
        </header>
</template>

<script setup lang="ts">
        import { ref, watch, computed } from 'vue';
        
        import Button from '@/components/ui/button.vue';
        import Container from '@/components/ui/container.vue';
        import MobileNavigation from '@/components/layouts/mobile_navigation.vue';
        import MobileNavigationToggle from '@/components/layouts/components/mobile_navigation_toggle.vue';
        import Typography from '@/components//ui/typography.vue';

        import useLockBody from '@/hooks/use-body-lock';
        import useScrollThreshold from '@/hooks/use-scroll-treshold';

        const links = ref([
                { label: 'About', path: '/#about' },
                { label: 'Work', path: '/#work' },
                { label: 'Contact', path: '/#contact' },
        ]);

        const isMobileMenuOpen = ref(false);
        const GRACE_THRESHOLD = ref<any>(12);

        const { isScrollThresholdPassed } = useScrollThreshold(GRACE_THRESHOLD.value);

        const isBackgroundShown = computed(() => isScrollThresholdPassed || isMobileMenuOpen.value);

        const toggleMobileMenu = () => {
                isMobileMenuOpen.value = !isMobileMenuOpen.value;
                isScrollThresholdPassed.value = !isScrollThresholdPassed.value;

                if (window.scrollY > 10)
                        isScrollThresholdPassed.value = true;
        };

        watch(() => isMobileMenuOpen.value, (newValue) => {
                useLockBody(newValue);
        });

        const closeMobileMenu = () => {
                isMobileMenuOpen.value = false;
        };
</script>