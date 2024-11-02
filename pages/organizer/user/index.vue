<script setup>
import { ref, onMounted } from 'vue';
import { toast } from "vue3-toastify";
import { useFetch } from '#app';
import { formatDate } from '~/utils/helper';
import { deleteConfirmation } from '~/utils/helper';
import Multiselect from '@suadelabs/vue3-multiselect';
import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
import { useTokenStore } from '~/stores/useTokenStore';


useHead({ title: 'User' });
definePageMeta({
    middleware:['auth']
})


const config = useRuntimeConfig();
const isOpen = ref(false);
const projects = ref([]);
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

const createUser = () =>{
    resetForm()
    isOpen.value = true
}

const { data: users, error, pending, status, refresh } = useAsyncData(
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


const { data: userProjects,refresh:userProjectRefresh} = useAsyncData(
    'organizer_users_projects',
    () =>
        $fetch('/organizer/user-projects', {
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

const getUserById = async (id) => {
    const { data, error, status } = await useApiFetch(`/organizer/user/${id}`, {
        method: 'GET',
    });
    console.log("🚀 ~ getUserById ~ data:", data)

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
            ? `/organizer/user/${isEdit.value.id}`
            : `/organizer/user`;


        const body = {
            ...form.value,
            projects:form.value.projects.map(project => project.id),
        }

        const { data, error, pending, status } = await useApiFetch(url, {
            method,
            body: body
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

const deleteUser = async (id) => {
    const result = await deleteConfirmation();

    if (result.isConfirmed) {
        // const { data, error, status } = await useFetch(`${config.public.apiUrl}/organizer/user/${id}`, {
        //     method: 'DELETE',
        // });

        const { data, error, status } = await useApiFetch(`/organizer/user/${id}`, {
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

</script>

<template>
    <div class="panel">
        <div class="mb-5 flex items-center justify-between">
            <h5 class="text-lg font-semibold dark:text-white-light">All User - <small>{{ users?.data?.total }}</small></h5>
            <div class="flex gap-3">
                <input type="search" v-model="query" placeholder="Search..." class="form-input">
                <button @click="createUser()" type="button" class="btn btn-info btn-sm space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>
                        Create
                    </span>
                </button>
            </div>
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
            <div class="flex justify-between mt-3">
                <div>
                    <select v-model="perPage" id="" class="form-input">
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="60">60</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <div>
                    <ul class="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
                        <li>
                            <button type="button" class="
                                flex
                                justify-center
                                font-semibold
                                px-3.5
                                py-2
                                rounded
                                transition
                                bg-white-light
                                text-dark
                                hover:text-white hover:bg-primary
                                dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary
                            ">
                                First
                            </button>
                        </li>
                        <li v-for="(link, key) in organizers?.data?.links">
                            <button type="button" class="
                                flex
                                justify-center
                                font-semibold
                                px-3.5
                                py-2
                                rounded
                                transition
                                bg-white-light
                                text-dark
                                hover:text-white hover:bg-primary
                                dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary
                            ">
                                <span v-html="link?.label"></span>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="
                                flex
                                justify-center
                                font-semibold
                                px-3.5
                                py-2
                                rounded
                                transition
                                bg-white-light
                                text-dark
                                hover:text-white hover:bg-primary
                                dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary
                            ">
                                Last
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div :class="[
        isOpen ? 'translate-x-0' : 'translate-x-full',
        'fixed right-0 top-0 z-50 h-full w-[550px] bg-white dark:bg-black shadow-lg transition-transform duration-300 ease-in-out',
    ]">
        <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 dark:bg-black dark:border-gray-800 p-4">
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
                            :options="userProjects?.data"
                            :multiple="true"
                            placeholder="Select project"
                            :track-by="'id'"
                            :label="'name'"
                        />
                    </div>

                    <div>
                        <button type="submit" :disabled="status === 'pending'" class="btn btn-info" :class="{'btn-danger' : status === 'pending'}">{{ isEdit.edit ? 'Update' : 'Submit' }}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
