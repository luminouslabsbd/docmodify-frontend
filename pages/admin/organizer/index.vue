<script setup>
import { ref, onMounted } from 'vue';
import { toast } from "vue3-toastify";
import { useAsyncData } from '#app';
import { useFetch } from '#app';
import Swal from 'sweetalert2';

const config = useRuntimeConfig();
const isOpen = ref(false);
const organizers = ref([]);
const errors = ref({});

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

const getAllOrganizer = async () => {
    const response = await fetch(`${config.public.apiUrl}/admin/organizer`);
    const data = await response.json();
    organizers.value = data?.data;
};

const getOrganizerById = async (id) => {
    const { data, error, status } = await useFetch(`${config.public.apiUrl}/admin/organizer/${id}`);

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
            ? `${config.public.apiUrl}/admin/organizer/${isEdit.value.id}`
            : `${config.public.apiUrl}/admin/organizer`;

        const { data, error, pending, status } = await useFetch(url, {
            method,
            body: form.value
        });

        if (status.value === 'error') {
            errors.value = error.value?.data?.errors;
        }
        if (status.value === 'success') {
            await getAllOrganizer();
            resetForm();
            isOpen.value = false;
            toast.success(data.value?.message)
        }
    } catch (error) {
        toast.error('Something want wrong!')
        console.log("🚀 ~ submitForm ~ error:", error)
    }
}

const deleteOrganizer = async (id) => {
    const result = await Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        padding: '2em',
        customClass: {
            confirmButton: 'bg-red-500 text-white hover:bg-red-600 rounded px-4 py-2',
            cancelButton: 'bg-gray-300 text-gray-700 hover:bg-gray-400 rounded px-4 py-2',
            title: 'font-bold text-lg',
            content: 'text-base',
        },
    });

    if (result.isConfirmed) {
        const { data, error, status } = await useFetch(`${config.public.apiUrl}/admin/organizer/${id}`, {
            method: 'DELETE',
        });

        if (status.value === 'error') {
            console.log("🚀 ~ deleteOrganizer ~ error:", error.value?.data)
            toast.error("Something want wrong!");
        }

        if (status.value === 'success') {
            await getAllOrganizer();
            toast.success(data.value?.message);
        }
    }
}

onMounted(async () => {
    await getAllOrganizer();
});

</script>

<template>
    <div class="panel">
        <div class="mb-5 flex items-center justify-between">
            <h5 class="text-lg font-semibold dark:text-white-light">Simple Table</h5>
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
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email Address</th>
                            <th>Address</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(organizer, key) in organizers?.data">
                            <td>{{ key + 1 }}</td>
                            <td class="whitespace-nowrap">{{ organizer?.name }}</td>
                            <td class="whitespace-nowrap">{{ organizer?.phone }}</td>
                            <td class="whitespace-nowrap">{{ organizer?.email }}</td>
                            <td class="w-[25%]">{{ organizer?.organization?.address }}</td>
                            <td>
                                <div class="flex gap-3">
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
        </div>
    </div>

    <div :class="[
        isOpen ? 'translate-x-0' : 'translate-x-full',
        'fixed right-0 top-0 z-50 h-full w-[550px] bg-white shadow-lg transition-transform duration-300 ease-in-out',
    ]">
        <div class="flex items-center justify-between bg-gray-50 p-4">
            <h2 class="text-2xl font-semibold">Create Organizer</h2>
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
                        <button type="submit" class="btn btn-info">{{ isEdit.edit ? 'Update' : 'Submit' }}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
