<template>
        <Button :background="true" type="button">Click me</Button>
        <Button :background="false" type="button">Click me</Button>

        <Typography tag="h1">text</Typography>
        <Typography tag="h2">text</Typography>
        <Typography tag="h3">text</Typography>
        <Typography tag="h4">text</Typography>

        <Icon name="mail"/>
        <Icon name="arrow-left"/>

</template>

<script setup lang="ts">
        import Button from '@/components/ui/button.vue';
        import Typography from '@/components/ui/typography.vue';
        import Icon from "@/components/ui/icons.vue";
</script>