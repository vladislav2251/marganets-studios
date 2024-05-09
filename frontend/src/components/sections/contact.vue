<template>
     <Section id="contact" aria-labelledby="contact-heading" hasBorderTop hasGlowEffect class="lg:after:hidden">
          <Container>
               <div class="flex h-full w-full flex-col lg:relative lg:flex-row">
                    <div class="basis-full self-start lg:sticky lg:top-24">
                         <Caption id="contact-heading">Contact</Caption>
                         <Typography tag="p" class="text-3xl/tight font-bold text-[#FFFEF9] md:text-5xl/tight">Got a problem to solve?</Typography>

                         <Typography tag="p" class="text-[#96A1BF]">
                              Get your space suit ready and tell me your ideas to develop <span
                              class="text-[#F0F2FE]">your dream website</span>.
                         </Typography>
                    </div>

                    <div class="mt-10 basis-full lg:ms-10 lg:mt-0 xl:ms-20">
                         <ContactForm />
                    </div>
               </div>
          </Container>
     </Section>
</template>

<script setup lang="ts">
     import Section from '@/components/ui/section.vue';
     import Container from '@/components/ui/container.vue';
     import Caption from '@/components/ui/caption.vue';
     import Typography from '@/components/ui/typography.vue';
     import ContactForm from '@/components/contact_form.vue';
</script>