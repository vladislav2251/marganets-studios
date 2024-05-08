<template>
        <main id="main" class="h-[2000px]">
                <Header />
                        <RouterView />
        </main>
</template>

<script setup lang="ts">
        import Header from '@/components/layouts/header.vue';
</script>