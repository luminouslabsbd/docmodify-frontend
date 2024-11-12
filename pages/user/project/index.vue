<script setup>
    import { ref, onMounted } from 'vue';
    import { useTokenStore } from '~/stores/useTokenStore';
    import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
    import SklitonLoader from '~/components/SklitonLoader.vue';

    useHead({ title: 'Project' });
    definePageMeta({
        middleware: ['auth'],
    });

    const page = ref(1);
    const perPage = ref(15);
    const query = ref('');
    const isDownloading = ref(null);
    const downloadModal = ref(false);
    const generateDownload = ref(false);
    const projectId = ref(null)
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

    const downloadDocxFile = async () => {
        const { data, refresh: getProgress } = await useApiFetch(`/user/download/generated-docx-file`, {
            method: 'GET',
            params:{
                projectId:projectId.value
            }
        });
        if(data.value.downloadUrl) window.location = data.value.downloadUrl

        downloadModal.value = false;
        generateDownload.value = false;
        isDownloading.value = false;
    };
</script>
<template>
    <div class="panel">
        <div class="mb-5 flex items-center justify-between">
            <h5 class="text-lg font-semibold dark:text-white-light">Assignments</h5>
        </div>
        <div class="mb-5">
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>#SL</th>
                            <th>Project Name</th>
                            <th>Description</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="status === 'success'">
                        <tr v-for="(project, key) in projects?.data">
                            <td>{{ key + 1 }}</td>
                            <td>{{ project?.name }}</td>
                            <td>{{ project?.description }}</td>
                            <td>
                                <div class="flex gap-3">
                                    <NuxtLink :to="`/user/assignment/${project?.id}`" class="btn btn-info btn-sm">Assessment</NuxtLink>
                                    <button @click="downloadDocx(project?.id)" class="btn btn-info btn-sm flex gap-2" :disabled="isDownloading === project?.id">
                                        <span
                                            v-if="isDownloading === project?.id"
                                            class="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white !border-l-transparent dark:border-black"
                                        ></span>
                                        <span>{{ isDownloading === project?.id ? 'Downloading...' : 'Download' }}</span>
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

                                        <button class="rounded-lg bg-primary px-4 py-2 text-white shadow" @click="downloadDocxFile">Download</button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>
