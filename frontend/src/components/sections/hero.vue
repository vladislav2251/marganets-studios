<template>
     <section aria-labelledby="hero-heading" class="sticky inset-0 flex h-screen w-full flex-col justify-center py-28">
          <Container>
               <div class="flex flex-col items-center justify-center">
                    <h1 id="hero-heading" class="text-balance text-center text-4xl/tight font-bold text-neutrals-50 sm:text-5xl/tight md:text-7xl lg:text-8xl/tight">
                         Web Development and Design Studio from the Future
                    </h1>

                    <div class="mt-12 flex items-stretch gap-x-6 gap-y-3 max-sm:flex-col sm:items-center">
                         <Button :background="true" type="link" size="big" to="/#work">Dig into my universe</Button>
                         <Button type="link" size="big" to="/#contact">See contacts</Button>
                    </div>
               </div>
          </Container>
     </section>
</template>

<script setup lang="ts">
     import Button from '@/components/ui/button.vue';
     import Container from '@/components/ui/container.vue';
</script>