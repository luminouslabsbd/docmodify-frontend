<script lang="ts" setup>
import { useTokenStore } from '~/stores/useTokenStore';
    definePageMeta({
        middleware:['auth'],
        role:authType.ADMIN
    })
    useHead({ title: 'Analytics' });

    const {authUser} = useTokenStore()
</script>

<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse">
            <li>
                <a href="javascript:;" class="text-primary hover:underline">Dashboard</a>
            </li>
        </ul>
        <div class="pt-5">
            <div class="mb-6 grid grid-cols-1 gap-6">
                <div class="panel h-full col-span-1">
                    <h2 class="font-bold text-xl capitalize">Hello, {{ authUser?.name }}</h2>
                    <p class="mt-3 text-gray-700">Welcome To Your Dashboard</p>
                </div>
            </div>
        </div>
    </div>
</template>
