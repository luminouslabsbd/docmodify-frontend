<script setup>
    import { ref } from 'vue';
    import { tabs } from '~/utils/helper';
    import { useFetch } from '#app';
    import { toast } from "vue3-toastify";

    const {tab, evidences, fetchEvidence} = defineProps({
        tab: {
            type:String,
            required:true,
            default:tabs.DOCUMENT
        },
        evidences: {
            type:Array,
            required:true,
        },
        fetchEvidence:{
            type:Function,
            required:true,
        }
    })

    const title = computed(() => {
        switch (tab) {
            case tabs.DOCUMENT:
            return "Documentation Evidence";
            case tabs.INTERVIEW:
            return "Interview Evidence";
            case tabs.ASSESSMENT:
            return "Assessment Evidence";
            default:
            return "Unknown Evidence";
        }
    });

    const config = useRuntimeConfig();
    const evidence = ref({})
    const errors = ref({});
    const isOpen = ref(false)
    const isShow = ref(false)
    const form = ref({
        number: '',
        title:'',
        file:null,
        type:tab
    });

    const resetForm = () => {
        form.value = {
            number: '',
            title:'',
            file:null,
            type:tab
        };
        errors.value = {};
    };


    const uploadFile = (event) => {
        const target = event.target;
        if (target.files?.[0]) {
            form.value.file = target.files[0];
        }
    }
    const submitForm = async() =>{
        const formData = new FormData();
        formData.append('number',form.value.number);
        formData.append('title',form.value.title);
        formData.append('file',form.value.file);
        formData.append('type',form.value.type);
        errors.value = {};
        try {
            const { data, error, pending, status } = await useApiFetch(`/user/evidence`, {
                method:"POST",
                body: formData,
            });

            if (status.value === 'error') {
                errors.value = error.value?.data?.errors;
            }
            if (status.value === 'success') {
                await fetchEvidence();
                resetForm();
                isOpen.value = false;
                toast.success(data.value?.message)
            }
        } catch (error) {
            toast.error('Something want wrong!')
            console.log("🚀 ~ submitForm ~ error:", error)
        }
    }

    const showEvidence = async (id) =>{
        try {
            const { data, error, pending, status } = await useApiFetch(`/user/show-evidence/${id}`);

            if (status.value === 'error') {
                errors.value = error.value?.data?.errors;
            }
            if (status.value === 'success') {
               evidence.value = data.value?.data;
               isShow.value = true;
            }
        } catch (error) {
            toast.error('Something want wrong!')
            console.log("🚀 ~ submitForm ~ error:", error)
        }
    }
    const deleteEvidence = async (id) => {
        errors.value = {};
        const result = await deleteConfirmation();
        if(result.isConfirmed){
            try {
                const { data, error, pending, status } = await useApiFetch(`/user/evidence/${id}`, {
                    method:"DELETE",
                });

                if (status.value === 'error') {
                    errors.value = error.value?.data?.errors;
                }
                if (status.value === 'success') {
                    await fetchEvidence();
                    resetForm();
                    isOpen.value = false;
                    toast.success(data.value?.message)
                }
            } catch (error) {
                toast.error('Something want wrong!')
                console.log("🚀 ~ submitForm ~ error:", error)
            }
        }
    }


</script>
<template>
    <div class="bg-gray-100 mt-5 px-4 py-2">
        <div class="flex justify-between">
            <h4 class="font-semibold text-lg" >{{ title }}</h4>
            <button class="btn btn-info btn-sm" @click="isOpen = true">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="font-bold text-xl w-3 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    </div>
    <div>
        <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>#Sl</th>
                    <th>Number</th>
                    <th>Title</th>
                    <th>File Type</th>
                    <th class="text-right">Action</th>
                </tr>
            </thead>
            <tbody v-if="evidences?.data?.length">
                <tr v-for="(evidence,key) in evidences?.data">
                    <td>{{ key + 1}}</td>
                    <td>{{ evidence?.number }}</td>
                    <td>{{ evidence?.title }}</td>
                    <td>Docx,Pdf,jpeg</td>
                    <td class="text-right">
                        <div class="flex gap-1">
                            <button @click="showEvidence(evidence?.id)" class="btn btn-info btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </button>
                            <button @click="deleteEvidence(evidence?.id)" class="btn btn-danger btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <template v-if="!(evidences?.data?.length)">
                <h3 class="text-xl font-semibold text-center mt-40">No Data Found</h3>
        </template>
        </div>
    </div>
    <div :class="[
        isOpen ? 'translate-x-0' : 'translate-x-full',
        'fixed right-0 top-0 z-50 h-full w-[550px] bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-y-scroll',
    ]">
        <div class="flex items-center justify-between bg-gray-50 p-4">
            <h2 class="text-2xl font-semibold">Create {{ title }}</h2>
            <button @click="isOpen = false" class="btn btn-sm btn-info">✕</button>
        </div>
        <div class="p-4">
            <form @submit.prevent="submitForm">
                <div class="space-y-5">
                    <div>
                        <label for="number">Reference Number <small class="text-red-500">*</small></label>
                        <input v-model="form.number" id="number" type="text" placeholder="Enter reference number"
                            class="form-input" />
                        <p v-if="errors?.number" class="text-red-500">{{ errors?.number[0] }}</p>
                    </div>

                    <div>
                        <label for="title">Reference Title <small class="text-red-500">*</small></label>
                        <input v-model="form.title" id="title" type="text" placeholder="Enter reference title"
                            class="form-input" />
                        <p v-if="errors?.title" class="text-red-500">{{ errors?.title[0] }}</p>
                    </div>

                    <div>
                        <label for="file">Reference File <code>Docx,PDF,Text etc...</code> <small class="text-red-500">*</small></label>
                        <input @change="uploadFile" id="file" type="file" placeholder="Enter reference file" class="form-input" />
                        <p v-if="errors?.file" class="text-red-500">{{ errors?.file[0] }}</p>
                    </div>

                    <div>
                        <button type="submit" class="btn btn-info">{{ 'Submit' }}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div :class="[
        isShow ? 'translate-x-0' : 'translate-x-full',
        'fixed right-0 top-0 z-50 h-full w-[550px] bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-y-scroll',
    ]">
        <div class="flex items-center justify-between bg-gray-50 p-4">
            <h2 class="text-2xl font-semibold">Show {{ title }}</h2>
            <button @click="isShow = false" class="btn btn-sm btn-info">✕</button>
        </div>
        <div class="p-4">
            <iframe class="w-full h-screen" :src="evidence"></iframe>
        </div>
    </div>
</template>
