import { useTokenStore } from "~/stores/useTokenStore";

export default defineNuxtRouteMiddleware((to, from) => {
    // @ts-ignore
    const {isLogin, authUser} = useTokenStore();
    if (!isLogin) {
        to.meta.layout = 'auth-layout'
        return navigateTo(`/?redirect=${to.path}`)
    }

    // if(isLogin){
    //     if (to.meta.role && authUser?.type !== to.meta.role) {
    //         return navigateTo('/access-denied');
    //     }
    // }

    // if(isLogin && authUser?.email_verified_at === null) return navigateTo(`/verification?redirect=${to.path}`)
})
