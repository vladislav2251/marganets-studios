<template>
        <button
                v-if="type === 'button' || type === 'submit'"
                :type="type"
                :class="[ size === 'small' ? 'relative isolate flex justify-center items-center select-none overflow-hidden border align-middle transition-all duration-500 before:absolute before:-start-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-left before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:[&:not(:disabled)]:before:scale-x-100 focus-visible:[&:not(:disabled)]:before:scale-x-100 active:[&:not(:disabled)]:scale-[1.01] disabled:opacity-70 border-neutrals-50 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base hover:[&:not(:disabled)]:text-neutrals-900 focus-visible:text-neutrals-900 text-neutrals-50 before:bg-neutrals-50 rounded-full' : '', background ? 'before:absolute before:-start-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-left before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:[&:not(:disabled)]:before:scale-x-100 focus-visible:[&:not(:disabled)]:before:scale-x-100 active:[&:not(:disabled)]:scale-[1.01] disabled:opacity-70 border-[#fffef9] px-6 py-3 md:px-8 md:py-4 md:text-lg hover:[&:not(:disabled)]:tracking-[0.075em] text-[#6919ff] before:bg-[#060918] bg-[#fffef9] hover:[&:not(:disabled)]:text-[#fffef9] focus-visible:text-[#fffef9]' : 'before:absolute before:-start-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-left before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:[&:not(:disabled)]:before:scale-x-100 focus-visible:[&:not(:disabled)]:before:scale-x-100  active:[&:not(:disabled)]:scale-[1.01] disabled:opacity-70 border-[#fffef9] px-6 py-3 md:px-8 md:py-4 md:text-lg hover:[&:not(:disabled)]:tracking-[0.075em]  hover:[&:not(:disabled)]:text-[#6919ff] focus-visible:text-[#6919ff] text-[#fffef9] before:bg-[#fffef9]']"
                class="relative isolate flex justify-center items-center select-none overflow-hidden rounded-full border align-middle transition-all duration-500"
        >

                <slot />
        </button>

        <router-link 
                v-else
                :to="to"
                :class="[ size === 'small' ? 'relative isolate flex justify-center items-center select-none overflow-hidden border align-middle transition-all duration-500 before:absolute before:-start-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-left before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:[&:not(:disabled)]:before:scale-x-100 focus-visible:[&:not(:disabled)]:before:scale-x-100 active:[&:not(:disabled)]:scale-[1.01] disabled:opacity-70 border-neutrals-50 px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base hover:[&:not(:disabled)]:text-neutrals-900 focus-visible:text-neutrals-900 text-neutrals-50 before:bg-neutrals-50 rounded-full' : '', background ? 'before:absolute before:-start-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-left before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:[&:not(:disabled)]:before:scale-x-100 focus-visible:[&:not(:disabled)]:before:scale-x-100 active:[&:not(:disabled)]:scale-[1.01] disabled:opacity-70 border-[#fffef9] px-6 py-3 md:px-8 md:py-4 md:text-lg hover:[&:not(:disabled)]:tracking-[0.075em] text-[#6919ff] before:bg-[#060918] bg-[#fffef9] hover:[&:not(:disabled)]:text-[#6919ff] focus-visible:text-[#6919ff]' : 'before:absolute before:-start-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-left before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:[&:not(:disabled)]:before:scale-x-100 focus-visible:[&:not(:disabled)]:before:scale-x-100  active:[&:not(:disabled)]:scale-[1.01] disabled:opacity-70 border-[#fffef9] px-6 py-3 md:px-8 md:py-4 md:text-lg hover:[&:not(:disabled)]:tracking-[0.075em] hover:[&:not(:disabled)]:text-[#6919ff] focus-visible:text-[#6919ff] text-[#fffef9] before:bg-[#fffef9]']"
                class="relative isolate flex justify-center items-center select-none overflow-hidden rounded-sm border align-middle transition-all duration-500"
        >

                <slot />
        </router-link>
</template>

<script setup lang="ts">

        import type { IButtonProps } from "@/interfaces/button.interface";
        const props = defineProps<IButtonProps>();

</script>