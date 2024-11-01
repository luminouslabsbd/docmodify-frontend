import { useTokenStore } from "~/stores/useTokenStore";

export default defineNuxtRouteMiddleware((to, from) => {
    // @ts-ignore
    const {isLogin}= useTokenStore();
    if (isLogin) return navigateTo('/admin/dashboard')
})
