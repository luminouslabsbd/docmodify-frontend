<script setup>
    import { ref, onMounted } from 'vue';
    import { useTokenStore } from '~/stores/useTokenStore';
    import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
    import SklitonLoader from '~/components/SklitonLoader.vue';
    import { toast } from 'vue3-toastify';
    import { useApiFetch } from '~/composables/useApiFetch';

    useHead({ title: 'Project' });
    definePageMeta({
        middleware: ['auth'],
    });

    const page = ref(1);
    const perPage = ref(15);
    const query = ref('');
    const isLoading = ref(false);
    const isDownloading = ref(null);
    const downloadModal = ref(false);
    const generateDownload = ref(false);
    const projectId = ref(null);
    const isOpen = ref(false);
    const form = ref({
        sourceProject : '',
        targetProject : '',
    })

    const {
        data: projects,
        error,
        pending,
        status,
        refresh,
    } = useAsyncData(
        'user_projects',
        () =>
            $fetch('/user/projects', {
                baseURL: useRuntimeConfig().public.apiUrl,
                method: 'GET',
                params: {
                    page: page.value,
                    query: query.value,
                    perPage: perPage.value,
                },
                headers: {
                    Authorization: `Bearer ${useTokenStore().token}`,
                },
            }),
        {
            watch: [page, query, perPage],
            cache: true,
            immediate: true,
        }
    );

    const downloadDocx = async (id) => {
        projectId.value = id;
        isDownloading.value = id;
        downloadModal.value = true;
        try {
            const { data } = await useApiFetch(`/user/generate-docx/${id}`, {
                method: 'GET',
            });
            await getJobProgress(data.value.id);
        } catch (error) {
            console.error('Docx Generate Error:', error);
            isDownloading.value = null;
        }
    };

    const getJobProgress = async (jobId) => {
        generateDownload.value = true;
        const intervalId = setInterval(async () => {
            const { data, refresh: getProgress } = await useApiFetch(`/user/get-generate-status/${jobId}`, {
                method: 'GET',
            });

            if (data.value.progress === 100) {
                // downloadModal.value = false;
                generateDownload.value = false;
                isDownloading.value = false;
                clearInterval(intervalId);
            }
            if (data.value.failedJobs) {
                downloadModal.value = false;
                generateDownload.value = false;
                isDownloading.value = false;
                clearInterval(intervalId);
            }
        }, 1000);
    };
    const downloadDocxFile = async (id) => {
        try {
            const { data, refresh: getProgress } = await useApiFetch(`/user/download/generated-docx-file`, {
                method: 'GET',
                params: {
                    projectId: id
                }
            });

            if(data.value == null) {
                alert("File not found");
                return;
            }else{
                window.location.href = data.value;
            }

        } catch (error) {
            console.error("Error downloading file:", error);
        } finally {
            downloadModal.value = false;
            generateDownload.value = false;
            isDownloading.value = false;
        }
    };



    const submitProjectDuplicateForm = async() =>{
        isLoading.value = true;


        if(!form.value.sourceProject || !form.value.targetProject){
            toast.error('Please select must FORM and TO project');
            isLoading.value = false;
            return;
        }

        if(form.value.sourceProject === form.value.targetProject){
            toast.error('Please select deferent FORM and TO project');
            isLoading.value = false;
            return;
        }

        try {
            const { data ,status} = await useApiFetch(`/user/duplicate-assessment`, {
                method: 'POST',
                body:form,
            });


            if (status.value === 'success') {
                isLoading.value = false;
                isOpen.value = false;
                toast.success(data?.value?.message)
            }

        } catch (error) {
            console.error('Docx Generate Error:', error);
            isDownloading.value = null;
        }
    }
</script>
<template>
    <div class="panel">
        <div class="mb-5 flex items-center justify-between">
            <h5 class="text-lg font-semibold dark:text-white-light">Assignments</h5>
            <div class="flex items-center">
                <button class="btn btn-sm btn-info" @click="isOpen = true">
                    Duplicate Assessment
                </button>
            </div>
        </div>
        <div class="mb-5">
            <div class="table-responsive">
                <table class="table-fixed w-full">
                    <thead>
                        <tr>
                            <th class="w-[10%]">#SL</th>
                            <th class="w-[15%]">Project Name</th>
                            <th class="w-[40%]">Description</th>
                            <th class="w-[15%] text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="status === 'success'">
                        <tr v-for="(project, key) in projects?.data" :key="project?.id">
                            <td>{{ key + 1 }}</td>
                            <td>{{ project?.name }}</td>
                            <td class="">{{ project?.description }}</td>
                            <td class="text-center">
                                <div class="flex gap-1 justify-center">
                                    <NuxtLink :to="`/user/assignment/${project?.id}`" class="btn btn-info btn-sm">Assessment</NuxtLink>
                                    <tippy target="generateDocx">Generate Docx</tippy>
                                    <button @click="downloadDocx(project?.id)" v-tippy:generateDocx class="btn btn-info btn-sm flex gap-2" :disabled="isDownloading === project?.id">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"  viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z"/><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/></g></svg>
                                    </button>
                                    <tippy target="downloadDocx">Download</tippy>
                                    <button @click="downloadDocxFile(project?.id)" v-tippy:downloadDocx class="btn btn-info btn-sm flex gap-2" :disabled="isDownloading === project?.id">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22 16v-1c0-2.828 0-4.242-.879-5.12C20.242 9 18.828 9 16 9H8c-2.829 0-4.243 0-5.122.88C2 10.757 2 12.17 2 14.997V16c0 2.829 0 4.243.879 5.122C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.878C22 20.242 22 18.829 22 16" opacity=".5"/><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 0-.75.75v10.973l-1.68-1.961a.75.75 0 1 0-1.14.976l3 3.5a.75.75 0 0 0 1.14 0l3-3.5a.75.75 0 1 0-1.14-.976l-1.68 1.96V2a.75.75 0 0 0-.75-.75" clip-rule="evenodd"/></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex min-h-[50vh] items-center justify-center" v-if="status === 'pending'">
                <SklitonLoader />
            </div>
        </div>
    </div>
    <div class="mb-5">
        <!-- Modal -->
        <TransitionRoot appear :show="downloadModal" as="template">
            <Dialog as="div" @close="downloadModal = true" class="relative z-50">
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay class="fixed inset-0 bg-[black]/60" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-start justify-center px-4 py-8">
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                        >
                            <DialogPanel class="panel w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                <button
                                    type="button"
                                    class="absolute top-4 text-gray-400 outline-none hover:text-gray-800 ltr:right-4 rtl:left-4 dark:hover:text-gray-600"
                                    @click="downloadModal = true"
                                >
                                    <svg>...</svg>
                                </button>
                                <div class="bg-[#fbfbfb] py-3 text-lg font-bold ltr:pl-5 ltr:pr-[50px] rtl:pl-[50px] rtl:pr-5 dark:bg-[#121c2c]">
                                    Generate Docx & Download
                                </div>
                                <div class="p-5">
                                    <div v-if="generateDownload" class="mt-10 flex flex-col items-center justify-center gap-3">
                                        <SklitonLoader />
                                        <h3 class="mt-3">Generating document. please wait...!</h3>
                                    </div>

                                    <div v-else class="mt-10 flex flex-col items-center justify-center gap-3 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="48" fill="none" stroke="#4CAF50" stroke-width="4" />
                                            <path
                                                fill="none"
                                                stroke="#4CAF50"
                                                stroke-width="4"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M20 50l20 20l40 -40"
                                                stroke-dasharray="120"
                                                stroke-dashoffset="120"
                                            >
                                                <animate attributeName="stroke-dashoffset" from="120" to="0" dur="0.5s" begin="0s" fill="freeze" />
                                            </path>
                                        </svg>

                                        <p>Your Document is ready for download. click the download button for download this file.</p>

                                        <button class="rounded-lg bg-primary px-4 py-2 text-white shadow" @click="downloadDocxFile(projectId)">Download</button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>


    <div :class="[
        isOpen ? 'translate-x-0' : 'translate-x-full',
        'fixed right-0 top-0 z-50 h-full w-[550px] bg-white dark:bg-black shadow-lg transition-transform duration-300 ease-in-out',
    ]">
        <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 dark:bg-black dark:border-gray-800 p-4">
            <h2 class="text-2xl font-semibold">Duplicate Assessment</h2>
            <div class="flex gap-2">
                <button @click="isOpen = false" class="btn btn-sm btn-info">✕</button>
            </div>
        </div>

        <div class="p-4">
            <form @submit.prevent="submitProjectDuplicateForm()">
                <div class="space-y-5">
                    <h4>Select form project<small class="text-red-500">*</small></h4>
                    <div class="max-h-[300px] overflow-hidden menu-scroll overflow-y-scroll">
                        <select class="form-select text-white-dark" v-model="form.sourceProject">
                            <option value="" disabled selected>Select one project</option>
                            <option v-for="(project, key) in projects?.data" :key="key" :value="project?.id">{{ project?.name }}</option>
                        </select>
                    </div>

                    <h4>Select to project <small class="text-red-500">*</small></h4>
                    <div class="max-h-[300px] overflow-hidden menu-scroll overflow-y-scroll">
                        <select class="form-select text-white-dark" v-model="form.targetProject">
                            <option value="" disabled selected>Select one project</option>
                            <option v-for="(project, key) in projects?.data" :key="key" :value="project?.id">{{ project?.name }}</option>
                        </select>
                    </div>

                    <div>
                        <button type="submit" class="btn btn-info" :disabled="isLoading">
                            <ButtonLoader :isLoading="isLoading" />
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
