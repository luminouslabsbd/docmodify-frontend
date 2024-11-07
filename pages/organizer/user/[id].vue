<script setup>
    import { ref , onMounted } from 'vue';
    import { useTokenStore } from '~/stores/useTokenStore';
    import { useRoute } from '~/.nuxt/vue-router';
    import { toast } from "vue3-toastify";

    useHead({title:'User Project'})
    definePageMeta({
        middleware:['auth']
    })

    const page = ref(1);
    const perPage = ref(15);
    const query = ref('');
    const isDownloading = ref(null);
    const loadingProjectId = ref(null);
    const route = useRoute();
    const isOpen = ref(false);

    const { data: projects, error, pending, status, refresh } = useAsyncData(
        'organizer_user_projects',
        () =>
            $fetch(`/organizer/user/${route.params.id}`, {
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
    )

    const downloadDocx = async (id) => {
        isDownloading.value = id;
        try {
            const {data} = await useApiFetch(`/user/generate-docx/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                },
            });
            window.location = data.value.downloadUrl
            isDownloading.value = null;
        } catch (error) {
            console.error("Docx Generate Error:", error);
            isDownloading.value = null;
        }
    };

    const getProjectForAssign = () => {
        isOpen.value = true;
    }

    const { data: assignProjects,refresh:assignProjectsRefresh } = useAsyncData(
        'organizer_user_assign_projects',
        () =>
            $fetch(`/organizer/get-project-for-assign/${route.params.id}`, {
                baseURL: useRuntimeConfig().public.apiUrl,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${useTokenStore().token}`,
                },
            }),
        {
            cache: true,
            immediate: true,
        }
    )

    const assignProject = async (id) => {
        loadingProjectId.value = id;
        const { data, error, pending, status } = await useApiFetch('/organizer/assign-new-project', {
            method:"PUT",
            body: {
                projectId:id,
                userId:route.params.id,
            }
        });
        if(data.value.success){
            await refresh();
            await assignProjectsRefresh();
            toast.success(data.value?.message);
            loadingProjectId.value = null;
            isOpen.value = false;
        }
    }

    const removeFormProject = async (id) => {
        const { data, error, pending, status } = await useApiFetch('/organizer/remove-form-project', {
            method:"DELETE",
            body: {
                projectId:id,
                userId:route.params.id,
            }
        });
        if(data.value.success){
            await refresh();
            await assignProjectsRefresh();
            toast.success(data.value?.message);
        }
    }

</script>
<template>
    <div class="panel">

        <div class="mb-5 flex items-center justify-between">
            <h5 class="text-lg font-semibold dark:text-white-light">All User - <small>{{ users?.data?.total }}</small></h5>
            <div class="flex gap-3">
                <button @click="getProjectForAssign()" type="button" class="btn btn-info btn-sm space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>
                        Assign Project
                    </span>
                </button>
            </div>
        </div>

       <div class="mb-5">
           <div class="table-responsive">
               <table v-if="projects?.data">
                <thead>
                    <tr>
                        <th>#SL</th>
                        <th class="w-[25%]">Project Name</th>
                        <th class="w-[50%]">Description</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                   <tbody v-if="status === 'success'">
                        <tr v-for="(project,key) in projects?.data">
                            <td>{{ key + 1}}</td>
                            <td>{{ project?.name}}</td>
                            <td>{{  project?.description }}</td>
                            <td>
                                <div class="flex gap-3">
                                    <button @click="downloadDocx(project?.id)" class="btn btn-info btn-sm flex gap-2" :disabled="isDownloading === project?.id">
                                        <span v-if="isDownloading === project?.id" class="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white !border-l-transparent dark:border-black"></span>
                                        <span>{{ isDownloading === project?.id? 'Downloading...' : 'Download'}}</span>
                                    </button>

                                    <button @click="removeFormProject(project?.id)" class="btn btn-danger btn-sm flex gap-2">
                                       Remove Form Project
                                    </button>
                                </div>
                            </td>
                        </tr>
                   </tbody>
               </table>
               <div v-else>
                    <h3>No Project Found For Assign</h3>
               </div>
           </div>
           <div class="min-h-[50vh] flex items-center justify-center" v-if="status === 'pending'">
                <SklitonLoader />
            </div>
       </div>
   </div>

   <div :class="[
        isOpen ? 'translate-x-0' : 'translate-x-full',
        'fixed right-0 top-0 z-50 h-full w-[550px] bg-white dark:bg-black shadow-lg transition-transform duration-300 ease-in-out',
    ]">
        <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 dark:bg-black dark:border-gray-800 p-4">
            <h2 class="text-2xl font-semibold">Assign Project</h2>
            <button @click="isOpen = false" class="btn btn-sm btn-info">✕</button>
        </div>
        <div class="p-4">
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>#SL</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="status === 'success'">
                        <tr v-for="(project, key) in assignProjects">
                            <td>{{ key + 1 }}</td>
                            <td class="whitespace-nowrap">{{ project?.name }}</td>
                            <td class="whitespace-nowrap">{{ project?.description }}</td>
                            <td>
                                <button
                                    @click="assignProject(project?.id)"
                                    class="btn btn-info btn-sm flex gap-2"
                                    :disabled="loadingProjectId === project?.id"
                                >
                                    <span
                                        v-if="loadingProjectId === project?.id"
                                        class="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white !border-l-transparent dark:border-black"
                                    ></span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-4 h-5"
                                        :class="{'hidden' : loadingProjectId === project?.id}"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
