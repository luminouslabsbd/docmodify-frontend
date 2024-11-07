<script setup>
import { ref, onMounted } from 'vue';
import { toast } from "vue3-toastify";
import { useAsyncData } from '#app';
import { useFetch } from '#app';
import { useApiFetch } from '~/composables/useApiFetch';
import { useTokenStore } from '~/stores/useTokenStore';
import ButtonLoader from '~/components/ButtonLoader.vue';

useHead({ title: 'Organizer' })
definePageMeta({
    middleware: ['auth']
})


const isOpen = ref(false);
const errors = ref({});
const isLoading = ref(false);

const isEdit = ref({
    edit: false,
    id: null,
});

const form = ref({
    name: '',
    email: '',
    phone: '',
    password: '',
    organization: '',
    address: ''
});

const resetForm = () => {
    form.value = {
        name: '',
        email: '',
        phone: '',
        password: '',
        organization: '',
        address: ''
    };
    errors.value = {};
    isEdit.value.edit = false;
    isEdit.value.id = null;
};

const createOrganizer = () => {
    resetForm()
    isOpen.value = true
}


const page = ref(1);
const perPage = ref(15);
const query = ref('');
const { data: organizers, error, pending, status, refresh } = useAsyncData(
    'admin_organizers',
    () =>
        $fetch('/admin/organizer', {
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

console.log("🚀 ~ organizers:", organizers?.value)

const getOrganizerById = async (id) => {
    const { data, error, status } = await useApiFetch(`/admin/organizer/${id}`, {
        method: 'GET',
    });

    if (status.value === 'error') {
        console.log("🚀 ~ deleteOrganizer ~ error:", error.value?.data)
        toast.error("Something want wrong!");
    }

    if (status.value === 'success') {
        form.value = data.value?.data;
        isEdit.value.edit = true;
        isEdit.value.id = id;
        isOpen.value = true;
    }
}

const submitForm = async () => {
    try {
        isLoading.value = true;
        const method = isEdit.value.edit ? 'PUT' : 'POST';
        const url = isEdit.value.edit
            ? `/admin/organizer/${isEdit.value.id}`
            : `/admin/organizer`;
        const { data, error, pending, status } = await useApiFetch(url, {
            method: method,
            body: form.value
        });

        if (status.value === 'error') {
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
        toast.error('Something want wrong!')
        console.log("🚀 ~ submitForm ~ error:", error)
    }
}

const deleteOrganizer = async (id) => {
    const result = await deleteConfirmation();

    if (result.isConfirmed) {
        const { data, error, status } = await useApiFetch(`/admin/organizer/${id}`, {
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

const getLastPage = computed(()=>{
    let page = {
        prevPage:null,
        nextPage:null
    }

    if(organizers?.value?.data?.organizers?.next_page_url){
        let nextpageurl = new URL(organizers?.value?.data?.organizers?.next_page_url);
        page.nextPage  = nextpageurl.searchParams.get('page');
    }

    if(organizers?.value?.data?.organizers?.prev_page_url){
        let prevpageurl = new URL(organizers?.value?.data?.organizers?.prev_page_url);
        page.prevPage  = prevpageurl.searchParams.get('page');
    }
    return page;
})


</script>

<template>
    <div class="panel">
        <div class="mb-5 flex items-center justify-between">
            <h5 class="text-lg font-semibold dark:text-white-light">All Organizer - {{ organizers?.data?.total }}</h5>
            <div class="flex gap-3">
                <input type="search" v-model="query" placeholder="Search..." class="form-input">
                <button @click="createOrganizer()" type="button" class="btn btn-info btn-sm space-x-1">
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
                            <th>#ID</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email Address</th>
                            <th>Address</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="status === 'success'">
                        <tr v-for="(organizer, key) in organizers?.data?.organizers?.data">
                            <td>{{ organizer?.id }}</td>
                            <td class="whitespace-nowrap">{{ organizer?.name }}</td>
                            <td class="whitespace-nowrap">{{ organizer?.phone }}</td>
                            <td class="whitespace-nowrap">{{ organizer?.email }}</td>
                            <td class="w-[25%]">{{ organizer?.organization?.address }}</td>
                            <td>
                                <div class="flex gap-2">
                                    <button class="btn btn-sm btn-info"
                                        @click="getOrganizerById(organizer.id)">Edit</button>
                                    <button class="btn btn-sm btn-danger"
                                        @click="deleteOrganizer(organizer.id)">Delete</button>
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
        'fixed right-0 top-0 z-50 h-full w-[550px] bg-white dark:bg-black shadow-lg transition-transform duration-300 ease-in-out',
    ]">
        <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 dark:bg-black dark:border-gray-800 p-4">
            <h2 class="text-2xl font-semibold">{{ isEdit.edit ? "Edit" : "Create" }} Organizer</h2>
            <button @click="isOpen = false" class="btn btn-sm btn-info">✕</button>
        </div>
        <div class="p-4">
            <form @submit.prevent="submitForm">
                <div class="space-y-5">
                    <div>
                        <label for="name">User Name <small class="text-red-500">*</small></label>
                        <input v-model="form.name" id="name" type="text" placeholder="Enter user name"
                            class="form-input" />
                        <p v-if="errors?.name" class="text-red-500">{{ errors?.name[0] }}</p>
                    </div>

                    <div>
                        <label for="email">Email Address <small class="text-red-500">*</small></label>
                        <input v-model="form.email" id="email" type="email" placeholder="Enter email"
                            class="form-input" />
                        <p v-if="errors?.email" class="text-red-500">{{ errors?.email[0] }}</p>
                    </div>

                    <div>
                        <label for="phone">Phone Number <small class="text-red-500">*</small></label>
                        <input v-model="form.phone" id="phone" type="text" placeholder="Enter phone number"
                            class="form-input" />
                        <p v-if="errors?.phone" class="text-red-500">{{ errors?.phone[0] }}</p>
                    </div>

                    <div v-show="!(isEdit.edit)">
                        <label for="password">Password <small class="text-red-500">*</small></label>
                        <input v-model="form.password" id="password" type="password" placeholder="Enter password"
                            class="form-input" />
                        <p v-if="errors?.password" class="text-red-500">{{ errors?.password[0] }}</p>
                    </div>

                    <div>
                        <label for="organization">Organization Name <small class="text-red-500">*</small></label>
                        <input v-model="form.organization" id="organization" type="text"
                            placeholder="Enter organization name" class="form-input" />
                        <p v-if="errors?.organization" class="text-red-500">{{ errors?.organization[0] }}</p>
                    </div>

                    <div>
                        <label for="address">Address <small class="text-red-500">*</small></label>
                        <textarea v-model="form.address" id="address" rows="4" class="form-input"
                            placeholder="Enter address"></textarea>
                        <p v-if="errors?.address" class="text-red-500">{{ errors?.address[0] }}</p>
                    </div>

                    <div>
                        <button type="submit" class="btn btn-info" :disabled="isLoading">
                            <ButtonLoader :isLoading="isLoading" />
                            {{ isEdit.edit ? 'Update' : 'Submit' }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
