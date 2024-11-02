import { useTokenStore } from "~/stores/useTokenStore";
import { authType } from "~/utils/helper";

export default defineNuxtRouteMiddleware((to) => {
    const { isLogin, authUser } = useTokenStore();

    // Define accessible routes for each role
    const roleRoutes = {
        admin: ['/admin', '/admin/dashboard'],           // Admin routes
        organizer: ['/organizer', '/organizer/dashboard'], // Organizer routes
        user: ['/user', '/user/project']                 // User routes
    };

    // Redirect if user is not logged in
    if (!isLogin) {
        return navigateTo('/login');
    }

    // Get the user's role
    const userRole = authUser?.type;

    // Ensure the user can only access routes specific to their role
    if (userRole === 'admin' && !roleRoutes.admin.includes(to.path)) {
        return navigateTo('/admin/dashboard'); // Redirect Admin to their default page
    }

    if (userRole === 'organizer' && !roleRoutes.organizer.includes(to.path)) {
        return navigateTo('/organizer/dashboard'); // Redirect Organizer to their default page
    }

    if (userRole === 'user' && !roleRoutes.user.includes(to.path)) {
        return navigateTo('/user/project'); // Redirect User to their default page
    }

    // Optional: Check if email verification is required before granting access
    // Uncomment the following block if needed:
    /*
    if (isLogin && authUser?.email_verified_at === null) {
        return navigateTo(`/verification?redirect=${to.path}`);
    }
    */
});
