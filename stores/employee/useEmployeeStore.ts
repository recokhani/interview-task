import {defineStore} from "pinia";
import {ref} from "vue";


export const useEmployeeStore = defineStore('useEmployeeStore', ()=>{
    const showEmployeeForm =ref(false)
    const loadingApi =ref(false)
    const showModalConfirm =ref(false)


    return{
        showEmployeeForm,
        loadingApi,
        showModalConfirm
    }
})