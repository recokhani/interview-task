import {defineStore} from "pinia";

export const useUserStore = defineStore('useUserStore', ()=>{

    const authenticatorStore = ref(null);
    const userList = ref([]);
    const userId = ref(null);
    const selectedUserId = ref(null);
    const selectedUsername = ref(null);
    const isOwner = ref(false);
    const selectedUserType = ref('USER');
    const providerId = ref(null);
    const username = ref('');
    const fullName = ref('');
    const mobileNumber = ref('');
    const role = ref('');
    const token = ref('');
    const userType = ref('');
    const avatarUrl = ref('');
    const theme = ref('blue');

    const userData = ref(null);


    const logOut = ()=>{
        userId.value = null;
        role.value = '';
        username.value = '';
        token.value = '';
        localStorage.clear();

    }





    return{
        userList,
        userId,
        selectedUserId,
        selectedUsername,
        selectedUserType,
        providerId,
        username,
        fullName,
        role,
        token,
        avatarUrl,
        mobileNumber,
        authenticatorStore,
        userType,
        logOut,
        isOwner,
        userData
    }
})