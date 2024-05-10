<template>
     <section id="about" aria-labelledby="about-heading" class="relative lg:border-b lg:border-[#2e364f] z-10 w-full bg-[#060918]">
          <div class="flex min-h-screen w-full items-center max-lg:flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,min(91.666667%/2,40rem))_minmax(0,min(91.666667%/2,40rem))_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,min(80%/2,40rem))_minmax(0,min(80%/2,40rem))_minmax(0,1fr)]">
          
               <Image 
                    src="/img/weezer.png"
                    alt="A friend and I are developing websites and we have an idea that we hope will interest you"
                    class="h-full max-h-screen w-full bg-neutrals-800 object-cover object-center lg:col-start-1 lg:col-end-3"
               />

               <div class="w-full py-28 max-lg:mx-auto max-lg:w-11/12 max-lg:max-w-7xl lg:ps-10 xl:ps-20">

                    <Caption class="about-heading">About</Caption>

                    <Typography tag="h2" class="mb-4 text-4xl font-bold text-neutrals-50 md:text-5xl">Web developers</Typography>

                    <Typography tag="p" class="max-w-prose text-base/relaxed text-[#96A1BF]">
                         I am Kilian, a passionate freelancer from Hamburg, Germany and the founder of LOKKEE
                         STUDIOS, bringing you

                         <span class="text-[#F0F2FE]">web development and design from the future</span>. My
                         expertise is developing next-level websites and web applications including full frontend
                         design.
                    </Typography>
               </div>
          </div>
     </section>
</template>

<script setup lang="ts">

     import Image from '@/components/ui/image.vue';
     import Typography from '@/components/ui/typography.vue';
     import Caption from '@/components/ui/caption.vue';

</script>