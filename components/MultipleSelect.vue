
<script setup>
import { ref, computed } from 'vue';

// Define the options for the combobox
const options = [
  { label: 'one', value: 'one' },
  { label: 'two', value: 'two' },
  { label: 'three', value: 'three' },
  { label: 'four', value: 'four' },
  { label: 'five', value: 'five' },
  { label: 'six', value: 'six' }
];

// Reactive data
const optionsVisible = ref(false);
const selectedValues = ref('');
const selectedCheckboxes = ref([]);

// Toggle options visibility
function toggleOptions() {
  optionsVisible.value = !optionsVisible.value;
}

// Close options if clicking outside
function hideOptions(event) {
  if (!event.target.closest('.custom-combobox-container')) {
    optionsVisible.value = false;
  }
}

// Watch for changes in the selected checkboxes and update the input field
computed(() => {
  selectedValues.value = selectedCheckboxes.value.join(', ');
});
</script>

<template>
    <div class="flex justify-center mt-32">
      <div class="w-96">
        <p class="mb-2">Custom multi-select combobox</p>
        <div class="relative">
          <div
            class="flex items-center border border-gray-300 p-2 cursor-pointer"
            @click="toggleOptions"
          >
            <input
              type="text"
              id="inputCheckbox"
              v-model="selectedValues"
              readonly
              class="w-full border-none outline-none bg-transparent cursor-pointer"
            />
            <img src="./arrow.png" alt="arrow" />
          </div>
          <div
            v-if="optionsVisible"
            class="absolute w-full border border-gray-300 border-t-0 mt-1 max-h-48 overflow-y-scroll bg-white"
            @mouseleave="hideOptions"
          >
            <label
              v-for="(option, index) in options"
              :key="index"
              class="block p-2 cursor-pointer hover:bg-gray-100"
            >
              <input
                type="checkbox"
                :id="option.value"
                :value="option.value"
                v-model="selectedCheckboxes"
                class="mr-2"
              />
              {{ option.label }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </template>


  <style scoped>
    .custom-combobox-container {
        position: relative;
    }
  </style>
