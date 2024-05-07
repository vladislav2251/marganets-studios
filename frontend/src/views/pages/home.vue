<template>
        <div>
                <Input v-model="Name" label="NAME"/>
        </div>
        <div>
                <Area v-model="TextArea" label="MESSAGE"></Area>
        </div>
</template>
<script setup lang="ts">
        import Input from "@/components/ui/input.vue";
        import Area from "@/components/ui/textarea.vue";
        import { ref } from "vue";

        const Name = ref("");
</script>