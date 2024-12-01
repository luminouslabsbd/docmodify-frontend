<script setup>
    import { ref, onMounted } from 'vue';
    import { useTokenStore } from '~/stores/useTokenStore';
    import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
    import SklitonLoader from '~/components/SklitonLoader.vue';
    import { toast } from 'vue3-toastify';
    import { useApiFetch } from '~/composables/useApiFetch';

    useHead({ title: 'Other Project' });
    definePageMeta({
        middleware: ['auth'],
    });

    const page = ref(1);
    const perPage = ref(15);
    const query = ref('');
    const isOpen = ref(false);
    const users = ref([]);

    const {
        data: projects,
        error,
        pending,
        status,
        refresh,
    } = useAsyncData(
        'other_projects',
        () =>
            $fetch('/user/other-projects', {
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

    const getProjectUsers = async (id) => {
        try {
            const { data, status } = await useApiFetch(`/user/other-project-users/${id}`, {
                method: 'GET',
            });

            if (status.value === 'success') {
                users.value = data.value.data;
                isOpen.value = true;
            }
        } catch (error) {
            console.log(error);
        }
    };
</script>

<template>
    <div class="panel">
        <div class="mb-5 flex items-center justify-between">
            <h5 class="text-lg font-semibold dark:text-white-light">Others Assignments</h5>
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
                        <tr v-for="(project, key) in projects">
                            <td>{{ key + 1 }}</td>
                            <td>{{ project?.name }}</td>
                            <td>{{ project?.description }}</td>
                            <td>
                                <div class="flex gap-3">
                                    <button @click="getProjectUsers(project?.id)" class="btn btn-info btn-sm">Assessment</button>
                                    <!-- <NuxtLink :to="`/user/assignment/${project?.id}/${project?.user?.id}`" class="btn btn-info btn-sm">Assessment</NuxtLink> -->
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
    <div :class="[
        isOpen ? 'translate-x-0' : 'translate-x-full',
        'fixed right-0 top-0 z-50 h-full w-[550px] bg-white dark:bg-black shadow-lg transition-transform duration-300 ease-in-out',
    ]">
        <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 dark:bg-black dark:border-gray-800 p-4">
            <h2 class="text-2xl font-semibold">Project Members</h2>
            <div class="flex gap-2">
                <button @click="isOpen = false" class="btn btn-sm btn-info">✕</button>
            </div>
        </div>

        <div class="p-4">
            <table>
                <thead>
                    <tr>
                        <td>User Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user,key) in users.users" :key="key">
                        <td>{{ user?.name }}</td>
                        <td>{{ user?.email }}</td>
                        <td>
                            <NuxtLink :to="`/user/other-project/${users?.id}/${user?.id}`" class="btn btn-info btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </NuxtLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
