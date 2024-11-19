<script setup>
    import { ref, onMounted, watch } from 'vue';

    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
        inputValue: {
            type: String,
            required: false,
        },
        rows: {
            type: Number,
            default: 4,
        },
    });

    const placeholder = ref(`   `);
    const textareaRef = ref(null);

    const adjustHeight = () => {
        const textarea = textareaRef.value;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    onMounted(() => {
        adjustHeight();
    });

    watch(() => props.inputValue, adjustHeight);
</script>

<template>
    <textarea
        ref="textareaRef"
        :name="name"
        :placeholder="placeholder"
        class="form-input rounded-none p-2 font-medium focus:border-gray-200"
        :rows="rows"
        @input="adjustHeight"
        style="overflow: hidden"
        >{{inputValue ?? placeholder}}</textarea>
</template>
