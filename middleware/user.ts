import { useTokenStore } from "~/stores/useTokenStore";

export default defineNuxtRouteMiddleware((to, from) => {
    // @ts-ignore
    const {isLogin, authUser} = useTokenStore();

    if(authUser?.type === authType.ORGANIZER){
        return navigateTo('/user/project');
    }

    // if(isLogin && authUser?.email_verified_at === null) return navigateTo(`/verification?redirect=${to.path}`)
})