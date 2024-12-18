<script setup>
import { ref, onMounted } from 'vue';
import { toast } from "vue3-toastify";
import { useLazyAsyncData } from '#app';
import { useFetch } from '#app';
import { formatDate } from '~/utils/helper';
import { deleteConfirmation } from '~/utils/helper';
import { useTokenStore } from '~/stores/useTokenStore';
import ButtonLoader from '~/components/ButtonLoader.vue';

useHead({title:'Project'})
definePageMeta({
    middleware:['auth']
})

const isOpen = ref(false);
const isLoading = ref(false);
const errors = ref({});
const page = ref(1);
const perPage = ref(15);
const query = ref('');

const isEdit = ref({
    edit: false,
    id: null,
});

const form = ref({
    name: '',
    project_id:'',
    deadline:'',
    description: '',
    user_ids : [],
});

const resetForm = () => {
    form.value = {
        name: '',
        project_id:'',
        deadline:'',
        description: '',
        user_ids : [],
    };
    errors.value = {};
    isEdit.value.edit = false;
    isEdit.value.id = null;
};

const createProject = ()=>{
    resetForm()
    isOpen.value = true
}


const { data: projects, error, pending, status, refresh } = useAsyncData(
    'organizer_projects',
    () =>
        $fetch('/organizer/project', {
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


const getProjectById = async (id) => {
    const { data, error, status } = await useApiFetch(`/organizer/project/${id}`, {
        method: 'GET',
    });

    if (status.value === 'error') {
        toast.error("Something want wrong!");
    }

    if (status.value === 'success') {
        form.value = data.value?.data;
        form.value.user_ids = data.value?.data?.users.map(user => user.id);
        isEdit.value.edit = true;
        isEdit.value.id = id;
        isOpen.value = true;
    }
}

const { data: users } = useAsyncData(
    'organizer_users',
    () =>
        $fetch('/organizer/user', {
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

const submitForm = async () => {
    errors.value = {};
    isLoading.value = true;
    try {
        const method = isEdit.value.edit ? 'PUT' : 'POST';
        const url = isEdit.value.edit
            ? `/organizer/project/${isEdit.value.id}`
            : `/organizer/project`;

        const { data, error, pending, status } = await useApiFetch(url, {
            method,
            body: form.value
        });

        if (status.value === 'error') {
            isLoading.value = false;
            errors.value = error.value?.data?.errors;
        }
        if (status.value === 'success') {
            await refresh();
            resetForm();
            isOpen.value = false;
            isLoading.value = false;
            toast.success(data.value?.message)
        }
    } catch (error) {
        isLoading.value = false;
        toast.error('Something want wrong!')
    }
}

const deleteProject = async (id) => {
    const result = await deleteConfirmation();

    if (result.isConfirmed) {
        const { data, error, status } = await useApiFetch(`/organizer/project/${id}`, {
            method: 'DELETE',
        });

        if (status.value === 'error') {
            toast.error("Something want wrong!");
        }

        if (status.value === 'success') {
            await refresh();
            toast.success(data.value?.message);
        }
    }
}



const getLastPage = computed(()=>{
    let page = {
        prevPage:null,
        nextPage:null
    }

    if(projects.value?.data?.next_page_url){
        let nextpageurl = new URL(projects.value.data.next_page_url);
        page.nextPage  = nextpageurl.searchParams.get('page');
    }

    if(projects.value?.data?.prev_page_url){
        let prevpageurl = new URL(projects.value.data.prev_page_url);
        page.prevPage  = prevpageurl.searchParams.get('page');
    }
    return page;
})
</script>

<template>
    <div class="panel">
        <div class="mb-5 flex items-center justify-between">
            <h5 class="text-lg font-semibold dark:text-white-light">Projects - <small>{{ projects?.data?.total }}</small></h5>
            <div class="flex gap-3">
                <input type="search" v-model="query" placeholder="Search..." class="form-input">
                <button @click="createProject()" type="button" class="btn btn-info btn-sm whitespace-nowrap">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>
                        Project Create
                    </span>
                </button>
            </div>
        </div>
        <div class="mb-5">
            <div class="table-responsive">
                <table class="table-fixed">
                    <thead>
                        <tr>
                        <th class="w-[10%]">Project Id</th>
                        <th class="w-[20%]">Project Name</th>
                        <th class="w-[40%]">Description</th>
                        <th class="w-[10%]">Assigned Users</th>
                        <th class="w-[15%]">Created At</th>
                        <th class="w-[15%]">Project Deadline</th>
                        <th class="w-[10%] text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="status === 'success'">
                        <tr v-for="(project, key) in projects?.data?.projects?.data">
                        <td>{{ project?.project_id }}</td>
                        <td class="whitespace-nowrap">{{ project?.name }}</td>
                        <td class="justify">{{ project?.description }}</td>
                        <td class="whitespace-nowrap">{{ project?.users_count }}</td>
                        <td class="whitespace-nowrap">{{ formatDate(project?.created_at) }}</td>
                        <td class="whitespace-nowrap">{{ project?.deadline }}</td>
                        <td class="text-center flex-shrink-0">
                            <div class="flex gap-3">
                            <button class="btn btn-sm btn-info" @click="getProjectById(project.id)">Edit</button>
                            <button class="btn btn-sm btn-danger" @click="deleteProject(project.id)">Delete</button>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Pagination
                :status="status"
                :perPage="perPage"
                :pagination="{ prevPage: getLastPage.prevPage, nextPage: getLastPage.nextPage }"
                @update:page="page = $event"
                @update:perPage="perPage = $event"
            />
        </div>
    </div>

    <div :class="[
        isOpen ? 'translate-x-0' : 'translate-x-full',
        'fixed right-0 top-0 z-50 h-full w-[550px] bg-white dark:bg-black shadow-lg transition-transform duration-300 ease-in-out overflow-y-scroll',
    ]">
        <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 dark:bg-black dark:border-gray-800 p-4">
            <h2 class="text-2xl font-semibold">Project {{ isEdit.edit ? 'Edit & Update' : 'Create' }}</h2>
            <button @click="isOpen = false" class="btn btn-sm btn-info">✕</button>
        </div>
        <div class="p-4">
            <form @submit.prevent="submitForm">
                <div class="space-y-5">
                    <div>
                        <label for="project_id">Project Id<small class="text-red-500">*</small></label>
                        <input v-model="form.project_id" id="project_id" type="text" placeholder="Enter project id"
                            class="form-input" />
                        <p v-if="errors?.project_id" class="text-red-500">{{ errors?.project_id[0] }}</p>
                    </div>
                    <div>
                        <label for="name">Project name<small class="text-red-500">*</small></label>
                        <input v-model="form.name" id="name" type="text" placeholder="Enter project name"
                            class="form-input" />
                        <p v-if="errors?.name" class="text-red-500">{{ errors?.name[0] }}</p>
                    </div>
                    <div>
                        <label for="deadline">Project deadline<small class="text-red-500">*</small></label>
                        <input v-model="form.deadline" id="deadline" type="date" placeholder="Enter deadline"
                            class="form-input" />
                        <p v-if="errors?.deadline" class="text-red-500">{{ errors?.deadline[0] }}</p>
                    </div>

                    <div>
                        <label for="deadline">Select Users<small class="text-red-500">*</small></label>

                        <div class="form-input max-h-[300px] overflow-y-scroll">
                            <label :for="user?.id" class="flex justify-between hover:bg-white-light px-3 py-1 cursor-pointer" v-for="(user,key) in users?.data?.users?.data">
                                <p>{{ user?.name }}</p>
                                <input
                                    :id="user?.id"
                                    type="checkbox"
                                    :value="user?.id"
                                    v-model="form.user_ids"
                                >
                            </label>
                        </div>

                        <p v-if="errors?.deadline" class="text-red-500">{{ errors?.deadline[0] }}</p>
                    </div>

                    <div>
                        <label for="description">Project Description<small class="text-red-500">*</small></label>
                        <textarea v-model="form.description" id="description" rows="4" class="form-input"
                            placeholder="Enter description"></textarea>
                        <p v-if="errors?.description" class="text-red-500">{{ errors?.description[0] }}</p>
                    </div>

                    <div>
                        <button type="submit" :disabled="isLoading" class="btn btn-info">
                            <ButtonLoader :isLoading="isLoading"/>
                            {{ isEdit.edit ? 'Update' : 'Submit' }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
