<template>
        <main id="main">
                <Header />
                        <RouterView />
                
        </main>
</template>

<script setup lang="ts">
        import Header from '@/components/layouts/header.vue';
</script>