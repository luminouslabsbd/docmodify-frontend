<script setup>
    import {defineProps} from "vue";

    const {isLoading} = defineProps({
        isLoading:{
            type : Boolean,
            required : true,
            default : false,
        },
    })
</script>

<template>
    <span v-if="isLoading" class="inline-flex h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white !border-l-transparent dark:border-black"></span>
</template>



<style>

</style>
