// plugins/vue-multiselect.js
import { defineNuxtPlugin } from '#app';
import Multiselect from '@suadelabs/vue3-multiselect';
import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Multiselect', Multiselect);
});
