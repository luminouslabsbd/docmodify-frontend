export default defineNuxtRouteMiddleware((to, from) => {
    // @ts-ignore
    const {isLogin, authUser} = useTokenStore();
    // @ts-ignore
    if (isLogin && !authUser?.email_verified_at) return navigateTo(`/verification?redirect=${to.path}`)

    // if(isLogin && authUser?.email_verified_at === null) return navigateTo(`/verification?redirect=${to.path}`)
})