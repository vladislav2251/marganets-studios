<template>
        <Button :background="true" type="button">Click me</Button>
        <Button :background="false" type="button">Click me</Button>

        <typography tag="h1">text</typography>
        <typography tag="h2">text</typography>
        <typography tag="h3">text</typography>
        <typography tag="h4">text</typography>
</template>

<script setup lang="ts">
        import Button from '@/components/ui/button.vue';
        import typography from '@/components/ui/typography.vue';
</script>