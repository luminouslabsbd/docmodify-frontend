<script setup>
import { ref, onMounted } from 'vue';
import { toast } from "vue3-toastify";
import { useLazyAsyncData } from '#app';
import { useFetch } from '#app';
import { formatDate } from '~/utils/helper';
import { deleteConfirmation } from '~/utils/helper';

useHead({title:'Project'})
const config = useRuntimeConfig();
const isOpen = ref(false);
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
    description: '',
});

const resetForm = () => {
    form.value = {
        name: '',
        description: ''
    };
    errors.value = {};
    isEdit.value.edit = false;
    isEdit.value.id = null;
};

const {data:projects, error, pending, status , refresh} = useAsyncData('organizer_projects',
    () =>
    $fetch('/organizer/project',{
        baseURL : config.public.apiUrl,
        method : "GET",
        params : {
            page: page.value,
            query: query.value,
            perPage: perPage.value,
        }
    }),{
        watch:[ page, query, perPage],
        cache:false,
    }
);

const getProjectById = async (id) => {
    const { data, error, status } = await useFetch(`${config.public.apiUrl}/organizer/project/${id}`);

    if (status.value === 'error') {
        toast.error("Something want wrong!");
        console.log("🚀 ~ getOrganizerById ~ error:", error.value?.data)
    }

    if (status.value === 'success') {
        form.value = data.value?.data;
        isEdit.value.edit = true;
        isEdit.value.id = id;
        isOpen.value = true;
    }
}

const submitForm = async () => {
    errors.value = {};
    try {
        const method = isEdit.value.edit ? 'PUT' : 'POST';
        const url = isEdit.value.edit
            ? `${config.public.apiUrl}/organizer/project/${isEdit.value.id}`
            : `${config.public.apiUrl}/organizer/project`;

        const { data, error, pending, status } = await useFetch(url, {
            method,
            body: form.value
        });

        if (status.value === 'error') {
            errors.value = error.value?.data?.errors;
        }
        if (status.value === 'success') {
            await refresh();
            resetForm();
            isOpen.value = false;
            toast.success(data.value?.message)
        }
    } catch (error) {
        toast.error('Something want wrong!')
        console.log("🚀 ~ submitForm ~ error:", error)
    }
}

const deleteProject = async (id) => {
    const result = await deleteConfirmation();

    if (result.isConfirmed) {
        const { data, error, status } = await useFetch(`${config.public.apiUrl}/organizer/project/${id}`, {
            method: 'DELETE',
        });

        if (status.value === 'error') {
            console.log("🚀 ~ deleteOrganizer ~ error:", error.value?.data)
            toast.error("Something want wrong!");
        }

        if (status.value === 'success') {
            await refresh();
            toast.success(data.value?.message);
        }
    }
}

onMounted(async () => {
    await refresh();
});

</script>

<template>
    <div class="panel">
        <div class="mb-5 flex items-center justify-between">
            <h5 class="text-lg font-semibold dark:text-white-light">Projects - <small>{{ projects?.data?.total }}</small></h5>
            <button @click="isOpen = true" type="button" class="btn btn-info btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ltr:mr-1.5 rtl:ml-1.5" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path
                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                    </path>
                </svg>
                Create
            </button>
        </div>
        <div class="mb-5">
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>#SL</th>
                            <th>Project Name</th>
                            <th>Description</th>
                            <th>Created At</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(project, key) in projects?.data?.data">
                            <td>{{ key + 1 }}</td>
                            <td class="whitespace-nowrap">{{ project?.name }}</td>
                            <td class="whitespace-nowrap">{{ project?.description }}</td>
                            <td class="whitespace-nowrap">{{ formatDate(project?.created_at) }}</td>
                            <td>
                                <div class="flex gap-3">
                                    <button class="btn btn-sm btn-info"
                                        @click="getProjectById(project.id)">Edit</button>
                                    <button class="btn btn-sm btn-danger"
                                        @click="deleteProject(project.id)">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div :class="[
        isOpen ? 'translate-x-0' : 'translate-x-full',
        'fixed right-0 top-0 z-50 h-full w-[550px] bg-white shadow-lg transition-transform duration-300 ease-in-out',
    ]">
        <div class="flex items-center justify-between bg-gray-50 p-4">
            <h2 class="text-2xl font-semibold">Create Project</h2>
            <button @click="isOpen = false" class="btn btn-sm btn-info">✕</button>
        </div>
        <div class="p-4">
            <form @submit.prevent="submitForm">
                <div class="space-y-5">
                    <div>
                        <label for="name">Project name<small class="text-red-500">*</small></label>
                        <input v-model="form.name" id="name" type="text" placeholder="Enter user name"
                            class="form-input" />
                        <p v-if="errors?.name" class="text-red-500">{{ errors?.name[0] }}</p>
                    </div>

                    <div>
                        <label for="description">Project description <small class="text-red-500">*</small></label>
                        <textarea v-model="form.description" id="description" rows="4" class="form-input"
                            placeholder="Enter description"></textarea>
                        <p v-if="errors?.description" class="text-red-500">{{ errors?.description[0] }}</p>
                    </div>

                    <div>
                        <button type="submit" class="btn btn-info">{{ isEdit.edit ? 'Update' : 'Submit' }}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
