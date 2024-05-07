<template>
        {{  data  }}
</template>
<script setup lang="ts">
        import { ref, onMounted } from "vue";
        import dataService from "../../services/modules/data.service"

        const data = ref([])

        onMounted(async () => {
                
                data.value = await dataService.getAll()

                console.log(data.value)
        });


</script>