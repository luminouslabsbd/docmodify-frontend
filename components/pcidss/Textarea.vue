<script setup>
    const props = defineProps({
        name:{
            type:String,
            required:true
        },
        inputValue:{
            type:String,
            required:false
        },
        rows:{
            type:Number,
            default:4,
        }
    })

    const placeholder = ref(`   `)
</script>

<template>
    <textarea :name="name"
              :placeholder="placeholder"
              class="p-2 form-input rounded-none font-semibold focus:border-gray-200"
              :rows="rows"
              >{{inputValue ?? placeholder}}</textarea>
</template>
