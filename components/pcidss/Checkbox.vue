<script setup>

    const defaultValues = ref({
        notChecked: '☐',
        checked: '☒',
    });

    const props = defineProps({
        name:{
            type:String,
            required:true
        },
        inputValue:{
            type:String,
            required:false
        },
        checked:{
            type:Boolean,
            required:false
        }
    })
</script>

<template>
    <input
        type="hidden"
       :name="name"
       :value="defaultValues.notChecked"
    />

    <input
        type="checkbox"
        :name="name"
        class="form-check-input h-4 w-4 border border-secondary"
        :checked="(inputValue && inputValue == '☒') ?? checked"
        :value="defaultValues.checked"
    />
</template>
