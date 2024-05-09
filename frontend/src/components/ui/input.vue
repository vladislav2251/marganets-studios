<template>
    <div class="grid gap-1.5">
        <label class="mb-2 block text-sm/none uppercase text-[#96A1BF] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> {{ props.label }} </label>
        <input 
            class="w-full h-[3rem] border border-solid border-gray-700 rounded-lg bg-gray-700 bg-opacity-20 p-3"
            type="text" 
            v-bind="$attrs" 
            :value="props.value" 
            @input="handleInput" 
        />
    </div>
</template>
<script setup lang="ts">
    const emit = defineEmits();
    import type { IInputProps } from '@/interfaces/input.interface';

    const props = defineProps<IInputProps>();

    const handleInput = (e: Event) => {
        const value = (e.target as HTMLInputElement).value;
        emit('update:value', value);
    };
</script>