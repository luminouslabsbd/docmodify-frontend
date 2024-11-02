<template>
    <div v-if="status === 'success'" class="flex justify-between mt-3">
        <div>
            <select v-model="localPerPage" @change="updatePerPage" class="form-input">
                <option v-for="option in perPageOptions" :key="option" :value="option">{{ option }}</option>
            </select>
        </div>
        <div>
            <ul class="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
                <li>
                    <button
                        :disabled="!pagination.prevPage"
                        @click="goToPage(pagination.prevPage)"
                        type="button"
                        class="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-info text-white disabled:opacity-25"
                    >
                        Previous Page
                    </button>
                </li>
                <li>
                    <button
                        :disabled="!pagination.nextPage"
                        @click="goToPage(pagination.nextPage)"
                        type="button"
                        class="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-info text-white disabled:opacity-25"
                    >
                        Next Page
                    </button>
                </li>
            </ul>
        </div>
    </div>

    <div class="min-h-[50vh] flex items-center justify-center" v-if="status === 'pending'">
        <SklitonLoader />
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

// Props for receiving data from the parent component
const props = defineProps({
    status: {
        type: String,
        default: 'pending',
    },
    perPage: {
        type: Number,
        default: 15,
    },
    perPageOptions: {
        type: Array,
        default: () => [15, 30, 60, 100],
    },
    pagination: {
        type: Object,
        required: true,
    },
});

// Emit events to notify parent about changes
const emit = defineEmits(['update:page', 'update:perPage']);

// Local state for perPage to bind with select input
const localPerPage = ref(props.perPage);

// Watch for changes in perPage to emit the update to the parent
watch(
    () => props.perPage,
    (newVal) => {
        localPerPage.value = newVal;
    }
);

// Emit event when the perPage changes
const updatePerPage = () => {
    emit('update:perPage', localPerPage.value);
};

// Emit event to change page
const goToPage = (page) => {
    emit('update:page', page);
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
