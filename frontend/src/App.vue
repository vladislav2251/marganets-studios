<template>
        <main id="main">
                <Header />
                        <RouterView />
                <Footer />
        </main>
</template>

<script setup lang="ts">
        import Header from '@/components/layouts/header.vue';
        import Footer from '@/components/layouts/footer.vue';
</script>