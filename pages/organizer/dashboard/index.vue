<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse">
            <li>
                <a href="javascript:;" class="text-primary hover:underline">Dashboard</a>
            </li>
            <li class="before:content-['/'] before:mr-2 rtl:before:ml-2">
                <span>Analytics</span>
            </li>
        </ul>
        <div class="pt-5">
            <div class="mb-6 grid grid-cols-4 gap-6">
                <div class="panel h-full sm:col-span-2 lg:col-span-1">
                    <p class="font-bold text-xl">Total Users</p>
                    <div class="mt-3 flex justify-between items-end">
                        <IconUsers />
                        <p class="font-bold text-xl">{{ dashboard?.totalUsers }} <span class="text-green-400">+</span>
                        </p>
                    </div>
                </div>
                <div class="panel h-full sm:col-span-2 lg:col-span-1">
                    <p class="font-bold text-xl">Total Projects</p>
                    <div class="mt-3 flex justify-between items-end">
                        <IconProjects />
                        <p class="font-bold text-xl">{{ dashboard?.totalProjects }} <span
                                class="text-green-400">+</span></p>
                    </div>
                </div>
                <div class="panel h-full sm:col-span-2 lg:col-span-1">
                    <p class="font-bold text-xl">User This Month</p>
                    <div class="mt-3 flex justify-between items-end">
                        <IconUser />
                        <p class="font-bold text-xl">{{ dashboard?.userThisMonth }} <span
                                class="text-green-400">+</span></p>
                    </div>
                </div>
                <div class="panel h-full sm:col-span-2 lg:col-span-1">
                    <p class="font-bold text-xl">Project This Month</p>
                    <div class="mt-3 flex justify-between items-end">
                        <IconProject />
                        <p class="font-bold text-xl">{{ dashboard?.projectThisMonth }} <span
                                class="text-green-400">+</span></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-5">
            <div class="grid grid-cols-2 gap-6">
                <div class="panel col-span-1">
                    <p class="font-bold text-lg mb-2">Latest Users</p>
                    <div class="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>#SL</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, key) in dashboard?.latestUsers">
                                    <td>{{ key + 1 }}</td>
                                    <td class="whitespace-nowrap">{{ user?.name }}</td>
                                    <td class="whitespace-nowrap">{{ user?.email }}</td>
                                    <td class="whitespace-nowrap">{{ user?.phone }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div class="panel col-span-1">
                    <p class="font-bold text-lg mb-2">Latest Project</p>
                    <div class="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>#SL</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(project, key) in dashboard?.latestProject">
                                    <td>{{ key + 1 }}</td>
                                    <td class="whitespace-nowrap">{{ project?.name }}</td>
                                    <td class="whitespace-nowrap">{{ project?.description }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>


    </div>
</template>
<script lang="ts" setup>
import { useTokenStore } from '~/stores/useTokenStore';

definePageMeta({
    middleware: ['auth']
})
const { data: dashboard, error, pending, status, refresh } = useAsyncData(
    'organizer_dashboard',
    () =>
        $fetch('/organizer/dashboard-data', {
            baseURL: useRuntimeConfig().public.apiUrl,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${useTokenStore().token}`,
            },
        }),
    {
        immediate: true,
    }
)

</script>
