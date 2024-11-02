<script setup>
    import { ref , onMounted } from 'vue';
    import { useFetch } from '#app';
import { useTokenStore } from '~/stores/useTokenStore';

    useHead({title:'Assignment'})
    definePageMeta({
        middleware:['auth']
    })

    const page = ref(1);
    const perPage = ref(15);
    const query = ref('');

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
    try {
        const {data} = await useApiFetch(`/user/generate-docx/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            },
        });
        window.location = data.value.downloadUrl
    } catch (error) {
        console.error("Docx Generate Error:", error);
    }
};

</script>
<template>
    <div class="panel">
       <div class="mb-5 flex items-center justify-between">
           <h5 class="text-lg font-semibold dark:text-white-light">Assignments</h5>
           <!-- <button @click="isOpen = true" type="button" class="btn btn-info btn-sm">
               <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ltr:mr-1.5 rtl:ml-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                   <circle cx="12" cy="12" r="3"></circle>
                   <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
               </svg> Create
           </button> -->
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
                   <tbody>
                        <tr v-for="(project,key) in projects?.data">
                            <td>{{ key + 1}}</td>
                            <td>{{ project?.name}}</td>
                            <td>{{  project?.description }}</td>
                            <td>
                                <div class="flex gap-3">
                                    <NuxtLink :to="`/user/assignment/${project?.id}`" class="btn btn-info btn-sm"> Modify</NuxtLink>
                                    <button @click="downloadDocx(project?.id)" class="btn btn-info btn-sm">Download</button>
                                </div>
                            </td>
                        </tr>
                   </tbody>
               </table>
           </div>
       </div>
   </div>
</template>
