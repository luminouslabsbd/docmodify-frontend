<script setup>
import { ref, onMounted } from 'vue';
import { toast } from "vue3-toastify";
import { useFetch } from '#app';
import { formatDate } from '~/utils/helper';
import { deleteConfirmation } from '~/utils/helper';
import Multiselect from '@suadelabs/vue3-multiselect';
import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';


useHead({ title: 'User' });
const config = useRuntimeConfig();
const isOpen = ref(false);
const projects = ref([]);
const users = ref([]);
const errors = ref({});
const page = ref(1);
const perPage = ref(15);
const query = ref('');
const options = ref([]);
const selectedOptions = ref([]);

const isEdit = ref({
    edit: false,
    id: null,
});

const form = ref({
    name: '',
    email: '',
    phone:'',
    password:'',
    projects:[],
});

const resetForm = () => {
    form.value = {
        name: '',
        email: '',
        phone:'',
        password:'',
        projects:[],
    };
    errors.value = {};
    isEdit.value.edit = false;
    isEdit.value.id = null;
};

const getUsers = async () => {
    const { data, error, status } = await useFetch(`${config.public.apiUrl}/organizer/user`);
    if (data.value) {
        users.value = data.value;
    }

    if(status.value === 'error'){
        console.log('Error ',error)
    }
};

const getProjects = async () => {
    const { data, error, status } = await useFetch(`${config.public.apiUrl}/organizer/user-projects`);
    if (status.value === 'success') {
        options.value = data.value?.data;
        isOpen.value = true
    }

    if(status.value === 'error'){
        console.log('Error ',error)
    }
}

const getUserById = async (id) => {
    const { data, error, status } = await useFetch(`${config.public.apiUrl}/organizer/user/${id}`);
    await getProjects();
    if (status.value === 'error') {
        toast.error("Something want wrong!");
        console.log("🚀 ~ getOrganizerById ~ error:", error.value?.data)
    }

    if (status.value === 'success') {
        const userData = data.value?.data;
        form.value = userData;
        form.projects = userData.projects.map(project => project.id);

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
            ? `${config.public.apiUrl}/organizer/user/${isEdit.value.id}`
            : `${config.public.apiUrl}/organizer/user`;


        const body = {
            ...form.value,
            projects:form.value.projects.map(project => project.id),
        }
        const { data, error, pending, status } = await useFetch(url, {
            method,
            body: body,
        });

        if (status.value === 'error') {
            errors.value = error.value?.data?.errors;
        }
        if (status.value === 'success') {
            await getUsers();
            resetForm();
            isOpen.value = false;
            toast.success(data.value?.message)
        }
    } catch (error) {
        toast.error('Something want wrong!')
        console.log("🚀 ~ submitForm ~ error:", error)
    }
}

const deleteUser = async (id) => {
    const result = await deleteConfirmation();

    if (result.isConfirmed) {
        const { data, error, status } = await useFetch(`${config.public.apiUrl}/organizer/user/${id}`, {
            method: 'DELETE',
        });

        if (status.value === 'error') {
            console.log("🚀 ~ deleteOrganizer ~ error:", error.value?.data)
            toast.error("Something want wrong!");
        }

        if (status.value === 'success') {
            await getUsers();
            toast.success(data.value?.message);
        }
    }
}

onMounted(async () => {
    await getUsers();
});

</script>

<template>
    <div class="panel">
        <div class="mb-5 flex items-center justify-between">
            <h5 class="text-lg font-semibold dark:text-white-light">All User - <small>{{ users?.data?.total }}</small></h5>
            <button @click="getProjects()" type="button" class="btn btn-info btn-sm">
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
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Project</th>
                            <th>Created At</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, key) in users?.data?.data">
                            <td>{{ key + 1 }}</td>
                            <td class="whitespace-nowrap">{{ user?.name }}</td>
                            <td class="whitespace-nowrap">{{ user?.email }}</td>
                            <td class="whitespace-nowrap">{{ user?.phone }}</td>
                            <td class="whitespace-nowrap">{{ user?.projects?.length ?? 0 }}</td>
                            <td class="whitespace-nowrap">{{ formatDate(user?.created_at) }}</td>
                            <td>
                                <div class="flex gap-3">
                                    <button class="btn btn-sm btn-info"
                                        @click="getUserById(user.id)">Edit</button>
                                    <button class="btn btn-sm btn-danger"
                                        @click="deleteUser(user.id)">Delete</button>
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
            <h2 class="text-2xl font-semibold">{{ isEdit.edit ? 'Edit & Update' : 'Create' }} User</h2>
            <button @click="isOpen = false" class="btn btn-sm btn-info">✕</button>
        </div>
        <div class="p-4">
            <form @submit.prevent="submitForm">
                <div class="space-y-5">
                    <div>
                        <label for="name">User name<small class="text-red-500">*</small></label>
                        <input v-model="form.name" id="name" type="text" placeholder="Enter user name"
                            class="form-input" />
                        <p v-if="errors?.name" class="text-red-500">{{ errors?.name[0] }}</p>
                    </div>

                    <div>
                        <label for="email">Email address<small class="text-red-500">*</small></label>
                        <input v-model="form.email" id="email" type="text" placeholder="Enter user email"
                            class="form-input" />
                        <p v-if="errors?.email" class="text-red-500">{{ errors?.email[0] }}</p>
                    </div>

                    <div>
                        <label for="phone">Phone number<small class="text-red-500">*</small></label>
                        <input v-model="form.phone" id="phone" type="text" placeholder="Enter user phone"
                            class="form-input" />
                        <p v-if="errors?.phone" class="text-red-500">{{ errors?.phone[0] }}</p>
                    </div>

                    <div v-show="!(isEdit.edit)">
                        <label for="password">Password<small class="text-red-500">*</small></label>
                        <input v-model="form.password" id="password" type="password" placeholder="Enter user password"
                            class="form-input" />
                        <p v-if="errors?.password" class="text-red-500">{{ errors?.password[0] }}</p>
                    </div>

                    <div>
                        <label for="phone">Select Project<small class="text-red-500">*</small></label>
                        <Multiselect
                            v-model="form.projects"
                            :options="options"
                            :multiple="true"
                            placeholder="Select project"
                            :track-by="'id'"
                            :label="'name'"
                        />
                    </div>

                    <div>
                        <button type="submit" class="btn btn-info">{{ isEdit.edit ? 'Update' : 'Submit' }}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
