<template>
     <div class="mt-10 basis-full lg:mt-0">
          <form>
               <fieldset class="group flex flex-col gap-y-6">
                    <Input type="text" label="Name" />
                    <Input type="text" label="Email" />
                    <Textarea type="text" label="Message"/>

                    <div class="flex max-sm:flex-col-reverse max-sm:gap-y-6 sm:items-center sm:justify-between">
                         <router-link to="mailto:dotsenk20034@gmail.com" class="inline-flex gap-2 items-center text-[#96A1BF] transition-colors hover:text-[#FFFEF9] focus-visible:text-[#FFFEF9]">
                              <Icon name="mail" />
                              dotsenk20034@gmail.com
                         </router-link>

                         <Button type="submit">Hit me up</Button>
                    </div>
               </fieldset>
          </form>
     </div>
</template>

<script setup lang="ts">
     import Input from '@/components/ui/input.vue';
     import Button from '@/components/ui/button.vue';
     import Icon from '@/components/ui/icons.vue';
     import Textarea from '@/components/ui/textarea.vue';
     import Caption from '@/components/ui/caption.vue';
     import Typography from '@/components/ui/typography.vue';

     import siteConfig from '@/config/site';
</script>