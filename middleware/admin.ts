import { useTokenStore } from "~/stores/useTokenStore";

export default defineNuxtRouteMiddleware((to, from) => {
    // @ts-ignore
    const {isLogin, authUser} = useTokenStore();

    if(authUser?.type === authType.ADMIN){
        return navigateTo('/admin/dashboard');
    }

    // if(isLogin && authUser?.email_verified_at === null) return navigateTo(`/verification?redirect=${to.path}`)
})
