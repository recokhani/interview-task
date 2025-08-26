import {defineStore} from "pinia";
import {ref} from "vue";


export const useGlobalStore = defineStore('useGlobalStore', ()=>{
    const chooseCreateItem =ref('')
    const showModalCreateGroup =ref(false)
    const showModalShareLink =ref(false)
    const showModalSettings =ref(false)
    const showModalConfirm =ref(false)
    const loadingModal =ref(false)
    const showModalContactList =ref(false)
    const showCategoryBar =ref(false)
    const showModalCreateGroupLevel =ref(1)
    const showShareModal = ref(false)
    const selectedRole = ref(null);
    const shareLink = ref('');
    const perPage = ref(10);
    const pageNumber = ref(1);
    const totalNumber = ref(1);
    const searchValue = ref('');
    const isSearching = ref(false);
    const withPagination = ref(false);
    const levelSettings = ref('main');
    const categoriesMainList = ref([]);
    const categoriesAllList = ref([]);

    return{
        chooseCreateItem,
        showModalContactList,
        showModalCreateGroup,
        showModalCreateGroupLevel,
        showModalConfirm,
        loadingModal,
        showModalShareLink,
        showModalSettings,
        selectedRole,
        showCategoryBar,
        shareLink,
        pageNumber,
        perPage,
        showShareModal,
        totalNumber,
        searchValue,
        levelSettings,
        withPagination,
        isSearching,
        categoriesAllList,
        categoriesMainList
    }
})