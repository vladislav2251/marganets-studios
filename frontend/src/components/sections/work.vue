<template>
     <Section id="work" class="lg:border-b-1 lg:border-[#2e364f] lg:before:hidden lg:after:hidden" aria-labelledby="work-heading" has-border-top has-glow-effect>
          <Container>
               <div class="flex flex-col pb-8 border-b border-[#2e364f] items-center text-center">
                    <Caption id="work-heading">Work</Caption>
                    <Typography tag="h2" class="mb-4 text-balance text-3xl/tight font-bold text-[#FFFEF9] md:text-5xl/tight">Dig into our universe</Typography>

                    <div class="mt-4 w-full">
                         <div class="grid gap-5 lg:grid-cols-3 md:grid-cols-2">

                              <Card />
                              <Card />
                              <Card />
                              <Card />
                              <Card />
                              <Card />
                         </div>
                    </div>
               </div>
          </Container>
     </Section>
</template>

<script setup lang="ts">
     import Section from '@/components/ui/section.vue';
     import Container from '@/components/ui/container.vue';
     import Typography from '@/components/ui/typography.vue';
     import Caption from '@/components/ui/caption.vue';
     import Card from '@/components/project_card.vue';
</script>