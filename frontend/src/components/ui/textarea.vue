<template>
    <div class="grid gap-1.5">
        <label class="mb-2 block text-sm/none uppercase text-[#96A1BF] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> {{ props.label }} </label>
        <textarea
            class="peer block max-h-36 min-h-12 w-full appearance-none border border-solid border-gray-700 bg-gray-700 bg-opacity-20 rounded-lg p-3 caret-primary shadow-[0_0_10px,_inset_0_0_10px] shadow-transparent transition-colors focus:border-primary focus:shadow-primary/70 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
            type="text" 
            v-bind="$attrs" 
            :value="props.value" 
            @input="handleArea" 
        />
    </div>
</template>
<script setup lang="ts">
    const emit = defineEmits();
    import type { IInputProps } from '@/interfaces/input.interface';
    
    const props = defineProps<IInputProps>();

    const handleArea = (e: Event) => {
        const value = (e.target as HTMLInputElement).value;
        emit('update:modelValue', value);
    };
</script>