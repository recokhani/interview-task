// ~/middleware/auth.ts
import { navigateTo } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
    // If running on client side, check localStorage
    if (process.client) {
        const token = localStorage.getItem('authenticatorStore'); // or useCookie('token')
        if (!token) {
            return navigateTo('/login');
        }
    }
    // If running on server side, redirect (optional)
    else {
        // You might want to handle this differently for SSR
        return navigateTo('/login');
    }
});