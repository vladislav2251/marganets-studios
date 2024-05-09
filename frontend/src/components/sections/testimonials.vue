<template>
     <Section id="stories" aria-labelledby="stories-heading" hasBorderTop hasGlowEffect>
          <Container>
               <div class="mb-16 flex flex-col items-center text-center">
                    <Caption id="stories-heading">Customer Stories</Caption>
                    <Typography tag="h2" class="mb-4 text-balance text-3xl/tight font-bold text-[#FFFEF9] md:text-5xl/tight">Trusted by the kindest clients</Typography>
                    
                    <Typography tag="p" class="max-w-prose text-base/relaxed text-[#96A1BF]">
                         Here&apos;s a glimpse into the heartfelt experiences of my incredible clients.<br />Your
                         trust fuels my passion.
                    </Typography>
               </div>
          </Container>

          <div class="mask-inline-faded group flex w-full overflow-x-hidden">
               <ul class="group-hover:play-state-paused motion-reduce:play-state-paused flex animate-marquee">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
               </ul>

               <ul aria-hidden="true" class="group-hover:play-state-paused motion-reduce:play-state-paused flex animate-marquee">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
               </ul>
          </div>
     </Section>
</template>

<script setup lang="ts">
     import Container from '@/components/ui/container.vue';
     import Section from '@/components/ui/section.vue';
     import Typography from '@/components/ui/typography.vue';
     import Caption from '@/components/ui/caption.vue';
     import Card from '@/components/testimonial_card.vue';
</script>