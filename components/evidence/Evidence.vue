<script setup>
    import { ref } from 'vue';
    import { tabs } from '~/utils/helper';
    import { useFetch } from '#app';
    import { toast } from "vue3-toastify";
    import ButtonLoader from '../ButtonLoader.vue';

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
        },
    })

    const evidenceTitle = ref({
        number:'Reference Number',
        name:{
            title:'',
            subTitle:''
        },
        purpose:'',
        revisionDate:{
            title:'',
            subTitle:'',
        }
    })

    const title = computed(() => {
        switch (tab) {
            case tabs.DOCUMENT:
                evidenceTitle.value.name.title = "Document Name";
                evidenceTitle.value.name.subTitle = "(including version, if applicable)";
                evidenceTitle.value.purpose = "Document Purpose";
                evidenceTitle.value.revisionDate.title = "Document Revision Date";
                evidenceTitle.value.revisionDate.subTitle = "(if applicable)";
                return "Documentation Evidence";

            case tabs.INTERVIEW:
            evidenceTitle.value.name.title = "Title of Workpaper with Interview Notes";
                evidenceTitle.value.purpose = "Topics Covered";
                evidenceTitle.value.revisionDate.title = "Role(s) of Interviewee(s)";
                return "Interview Evidence";

            case tabs.ASSESSMENT:
                evidenceTitle.value.name.title = "Title of Workpaper or Evidence";
                evidenceTitle.value.purpose = "Topics Covered or Evidence Collected";
                evidenceTitle.value.revisionDate.title = "Sample Set Reference Number from Table 6.3";
                evidenceTitle.value.revisionDate.subTitle = "(if applicable)";
                return "Assessment Evidence";

            default:
            return "Unknown Evidence";
        }
    });

    const isLoading = ref(false);
    const evidence = ref({})
    const errors = ref({});
    const isOpen = ref(false)
    const isShow = ref(false)
    const isEdit = ref({
        edit: false,
        id: null,
    });
    const form = ref({
        number: {
            key:'referenceNumber_6_4_',
            value:''
        },
        name:{
            key:'documentName_6_4_',
            value:''
        },
        purpose:{
            key:'documentPurpose_6_4_',
            value:''
        },
        revision_date:{
            key:'documentRevisionDate_6_4_',
            value:''
        },
        file:null,
        type:tab
    });
    const editForm = ref({})

    const resetForm = () => {
        form.value = {
            reference_number_value: '',
            document_name_value: '',
            document_purpose_value:'',
            document_revision_date_value:'',
            file:null,
            type:tab
        };
        errors.value = {};
    };

    const uploadFile = (event) => {
        const target = event.target;
        if (target.files?.[0]) {
            editForm.value.file = target.files[0];
        }
    }
    const submitForm = async() =>{
        isLoading.value = true;
        const formData = new FormData();

        formData.append('id',editForm.value.id);
        formData.append('number',editForm.value.reference_number_value);
        formData.append('name',editForm.value.document_name_value);
        formData.append('purpose',editForm.value.document_purpose_value);
        formData.append('revision',editForm.value.document_revision_date_value);
        formData.append('file',editForm.value.file);
        formData.append('type',tab);

        errors.value = {};
        try {
            const { data, error, pending, status } = await useApiFetch(`/user/evidence`, {
                method:"POST",
                body: formData,
            });


            if (status.value === 'error') {
                isLoading.value = false;
                errors.value = error.value?.data?.errors;
            }
            if (status.value === 'success') {
                await fetchEvidence();
                editForm.value = {};
                isOpen.value = false;
                isLoading.value = false;
                toast.success(data.value?.message)
            }
        } catch (error) {
            toast.error('Something want wrong!')
            isLoading.value = false;
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

    function getExtensionColor(extension) {
        switch (extension) {
            case 'pdf':
                return 'bg-green-500';
            case 'docx':
                return 'bg-blue-500';
            case 'jpg':
                return 'bg-violet-500'
            case 'jpeg':
                return 'bg-orange-500'
            case 'png':
                return 'bg-yellow-500';
            case 'mp4':
                return 'bg-rose-500';
            default:
                return 'bg-gray-500';
    }
}


const getEvidenceById = async (id) => {
    alert(id);
    const { data, error, status } = await useApiFetch(`/user/show-evidence/${id}`, {
        method: 'GET',

    });

    if (status.value === 'error') {
        toast.error("Something want wrong!");
    }

    if (status.value === 'success') {
        editForm.value = data.value.data
        console.log("🚀 ~ getEvidenceById ~ editForm:", editForm.value)
        isEdit.value.edit = true;
        isEdit.value.id = id;
        isOpen.value = true;
    }
}

watch(() => evidences, (newEvidences) => {
  console.log('Evidences updated:', newEvidences);
});
</script>
<template>
    <div class="bg-gray-100 dark:bg-slate-800 mt-5 px-4 py-2">
        <div class="flex justify-between">
            <h4 class="font-semibold text-lg" >{{ title }}</h4>
            <!-- <button class="btn btn-info btn-sm" @click="isOpen = true">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="font-bold text-xl w-3 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button> -->
        </div>
    </div>
    <div>
        {{  evidences }}
        <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th class="border border-white-dark">Reference Number</th>
                    <th class="border border-white-dark">{{ evidenceTitle.name?.title }}</th>
                    <th class="border border-white-dark">{{ evidenceTitle?.purpose}}</th>
                    <th class="border border-white-dark">{{ evidenceTitle?.revisionDate?.title}}</th>
                    <th class="border border-white-dark">File Type</th>
                    <th class="border border-white-dark text-right">Action</th>
                </tr>
            </thead>

            <tbody v-if="evidences?.length">
                <tr class="" v-for="(evidence,key) in evidences">
                    <td class="border border-white-dark">{{ evidence?.reference_number_value ?? '---' }}</td>
                    <td class="border border-white-dark">{{ evidence?.document_name_value ?? '---' }}</td>
                    <td class="border border-white-dark">{{ evidence?.document_purpose_value ?? '---' }}</td>
                    <td class="border border-white-dark">{{ evidence?.document_revision_date_value ?? '---' }}</td>
                    <td class="border border-white-dark">
                        <span class="px-[10px] py-[1px] rounded-sm text-white font-semibold text-sm"
                              :class="getExtensionColor(evidence?.extension)"
                            >{{ evidence?.extension }}</span>
                    </td>
                    <td class="border border-white-dark text-right">
                        <div class="flex gap-1">
                            <button @click="getEvidenceById(evidence?.id)" class="btn btn-info btn-sm">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg> -->
                                Add
                            </button>
                            <button @click="showEvidence(evidence?.id)" class="btn btn-info btn-sm">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg> -->
                                View
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <template v-if="!(evidences?.length)">
                <h3 class="text-xl font-semibold text-center mt-40">No Data Found</h3>
        </template>
        </div>
    </div>
    <div :class="[
        isOpen ? 'translate-x-0' : 'translate-x-full',
        'fixed right-0 top-0 z-50 h-full w-[950px] bg-white dark:bg-black shadow-lg transition-transform duration-300 ease-in-out',
    ]">
        <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 dark:bg-black dark:border-gray-800 p-4">
            <h2 class="text-2xl font-semibold">Create {{ title }}</h2>
            <button @click="isOpen = false" class="btn btn-sm btn-info">✕</button>
        </div>
        <div class="p-4">
            <form @submit.prevent="submitForm">
                <div class="space-y-5">
                    <div>
                        <label for="number">Reference Number <small class="text-red-500">*</small></label>
                        <input v-model="editForm.reference_number_value" id="number" type="text" placeholder="Enter reference number"
                            class="form-input" />
                        <p v-if="errors?.number" class="text-red-500">{{ errors?.number[0] }}</p>
                    </div>

                    <div>
                        <label for="name">{{ evidenceTitle.name?.title }} <small class="text-red-500">*</small></label>
                        <input v-model="editForm.document_name_value" id="name" type="text" :placeholder="`${evidenceTitle.name?.title} ${evidenceTitle.name?.subTitle}`"
                            class="form-input" />
                        <p v-if="errors?.name" class="text-red-500">{{ errors?.name[0] }}</p>
                    </div>

                    <div>
                        <label for="purpose">{{ evidenceTitle.purpose }} <small class="text-red-500">*</small></label>
                        <input v-model="editForm.document_purpose_value" id="purpose" type="text" :placeholder="evidenceTitle.purpose"
                            class="form-input" />
                        <p v-if="errors?.purpose" class="text-red-500">{{ errors?.purpose[0] }}</p>
                    </div>

                    <div>
                        <label for="revision_date">{{ evidenceTitle.revisionDate?.title}} <small class="text-red-500">*</small></label>
                        <input v-model="editForm.document_revision_date_value" id="revision_date" :type="tab === tabs.DOCUMENT ? 'date' : 'text'" :placeholder="`${evidenceTitle.revisionDate?.title} ${evidenceTitle.revisionDate?.subTitle}`"
                            class="form-input" />
                        <p v-if="errors?.revision_date" class="text-red-500">{{ errors?.revision_date[0] }}</p>
                    </div>


                    <div>
                        <label for="file">Reference File <code>Docx,PDF,Text etc...</code> <small class="text-red-500">*</small></label>
                        <input @change="uploadFile" id="file" type="file" placeholder="Enter reference file" class="form-input" />
                        <p v-if="errors?.file" class="text-red-500">{{ errors?.file[0] }}</p>
                    </div>

                    <div>
                        <button type="submit" class="btn btn-info" :disabled="isLoading" >
                            <ButtonLoader :isLoading="isLoading"/>
                            {{ 'Submit' }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div :class="[
        isShow ? 'translate-x-0' : 'translate-x-full',
        'fixed right-0 top-0 z-50 h-full w-[950px] bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-hidden',
    ]">
        <div class="flex items-center justify-between bg-gray-50 p-4">
            <h2 class="text-2xl font-semibold">Show {{ title }}</h2>
            <button @click="isShow = false" class="btn btn-sm btn-info">✕</button>
        </div>
        <div class="p-4">
            <template v-if="evidence?.file === null">
                <div class="flex flex-col items-center justify-center h-screen gap-3 text-center">
                    <h1 class="font-semibold text-2xl">No Data Found</h1>
                </div>
            </template>
            <template v-else>
                <template v-if="evidence?.extension === 'pdf'">
                <div class="w-full h-screen overflow-hidden">
                    <iframe class="w-full h-full" :src="evidence?.fileUrl"></iframe>
                </div>
            </template>
              <!-- Image Display with Standard Design -->
            <template v-if="evidence?.extension === 'jpg' || evidence?.extension === 'jpeg' || evidence?.extension === 'png'">
                <div class="w-full h-[80vh] max-w-full flex items-center justify-center overflow-hidden bg-gray-100">
                    <img class="max-w-full max-h-full object-contain" :src="evidence?.fileUrl" alt="evidence">
                </div>
            </template>

            <template v-else>
                <div class="w-full h-screen overflow-hidden">
                    <iframe class="w-full h-full" :src="evidence?.fileUrl"></iframe>
                </div>
            </template>
            </template>

        </div>
    </div>
</template>
