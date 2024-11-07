<script setup>
    import { ref , onMounted } from 'vue';
    import { useTokenStore } from '~/stores/useTokenStore';

    useHead({title:'Project'})
    definePageMeta({
        middleware:['auth']
    })

    const page = ref(1);
    const perPage = ref(15);
    const query = ref('');
    const isDownloading = ref(null)

    const { data: projects, error, pending, status, refresh } = useAsyncData(

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
                        <tr v-for="(project,key) in projects?.data">
                            <td>{{ key + 1}}</td>
                            <td>{{ project?.name}}</td>
                            <td>{{  project?.description }}</td>
                            <td>
                                <div class="flex gap-3">
                                    <NuxtLink :to="`/user/assignment/${project?.id}`" class="btn btn-info btn-sm"> Modify</NuxtLink>
                                    <button @click="downloadDocx(project?.id)" class="btn btn-info btn-sm flex gap-2" :disabled="isDownloading === project?.id">
                                        <span v-if="isDownloading === project?.id" class="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white !border-l-transparent dark:border-black"></span>
                                        <span>{{ isDownloading === project?.id ? 'Downloading...' : 'Download'}}</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                   </tbody>
               </table>
           </div>
           <div class="min-h-[50vh] flex items-center justify-center" v-if="status === 'pending'">
                <SklitonLoader />
            </div>
       </div>
   </div>
</template>
