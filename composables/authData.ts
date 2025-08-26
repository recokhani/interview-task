import {useRouter} from "#vue-router";

export const authData = ()=>{
    const getToken = () => {
        const router = useRouter();
        const currentRoutePath = router.currentRoute.value.path;
        const excludedRoutes = ['/', '/auth/login', '/login', '/register'];
        const isExcluded = excludedRoutes.some(route => {
            if (route === '/') {
                return currentRoutePath === '/';
            }
            return currentRoutePath.startsWith(route);
        });
        if (!isExcluded) {
            // try {
            //     const authData = JSON.parse(localStorage.getItem('authenticatorStore') || '{}');
            //     const accessToken = authData.access_token || null;
            //     if (!accessToken) {
            //         // console.log('No access token found. Redirecting to home.');
            //         return router.push(`/`);
            //     }
            //     return accessToken;
            // } catch (error) {
            //     console.error("Failed to parse authenticatorStore from localStorage", error);
            //     return null;
            // }
            return 'reza-khani-61162158-1dc3-489d-890e-864556e58b4d';
        }
        return null;
    };

     const getPermission = () => {
        try {
            const authData = JSON.parse(localStorage.getItem('authenticatorStore') || '{}');
            return authData?.userData?.permissions || null;
        } catch (error) {
            console.error("Failed to parse authenticatorStore from localStorage", error);
            return null;
        }
    };
     const checkPermissions = (permissionList, subject, action) => {
        return permissionList?.some((item) => {
            if (
                (item?.subject === subject && item?.action === action) ||
                (item?.subject === 'all' && item?.action === 'manage')
            ) {
                // console.log('Permissions matched:', item.subject, item.action);
                return true;
            }
            return false;
        });
    };

     const isLoggedIn = () => {
         const authRaw = process.client ? localStorage.getItem('authenticatorStore') : null

         const authData = authRaw ? JSON.parse(authRaw) : null

         const accessToken = authData?.accessToken || null
         const userData = authData?.userData || null

         const isLoggedIn = computed(() => !!accessToken)

         return {
             isLoggedIn,
             accessToken,
             userData,
         }
     }

     return{
         getToken,
         getPermission,
         checkPermissions,
         isLoggedIn
     }
}