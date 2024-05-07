<template>
<<<<<<< HEAD
        <Button :background="true" type="button">Click me</Button>
        <Button :background="false" type="button">Click me</Button>

        <typography tag="h1">text</typography>
        <typography tag="h2">text</typography>
        <typography tag="h3">text</typography>
        <typography tag="h4">text</typography>
=======
        <div>
                <Input v-model="Name" label="NAME"/>
        </div>
        <div>
                <Area v-model="TextArea" label="MESSAGE"></Area>
        </div>
>>>>>>> dfafeb67b7db310ecfdc21275a313ad8e22da317
</template>

<script setup lang="ts">
<<<<<<< HEAD
        import Button from '@/components/ui/button.vue';
        import typography from '@/components/ui/typography.vue';
=======
        import Input from "@/components/ui/input.vue";
        import Area from "@/components/ui/textarea.vue";
        import { ref } from "vue";

        const Name = ref("");
>>>>>>> dfafeb67b7db310ecfdc21275a313ad8e22da317
</script>