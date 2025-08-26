
import {useRuntimeConfig} from "#imports";
import axios from 'axios';
import {useRouter} from "#vue-router";
// import {authData} from "#imports";
import {toast} from "vue-sonner";
import { useNuxtApp } from '#app';
import {ErrorHandler} from "~/utils/ErrorHnadler";
import {useEmployeeStore} from "~/stores/employee/useEmployeeStore";
import type {CreateEmployeeDto} from "~/types/employee/employee";


export const useApiList = () => {
    const config = useRuntimeConfig();
    const {getToken} = authData();
    const router = useRouter();
    const employeeStore = useEmployeeStore();
    const BASE_URL = config.public.API_BASE_URL;
    const access_token = getToken();
    const $api = axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: access_token ? `Bearer ${access_token}` : '',
        },
    });


    const getEmployeesList = async () => {
        try {
            const response = await $api.get(`employee`);
            return response
        } catch (err) {
            ErrorHandler.handleError(err, router);
        }finally {
            employeeStore.loadingApi = false;
        }
    }

    const getEmployee = async (employeeId:string) => {
        try {
            const response = await $api.get(`employee/${employeeId}`);
            return response
        } catch (err) {
            ErrorHandler.handleError(err, router);
        }finally {
            employeeStore.loadingApi = false;
        }
    }
    const removeEmployee = async (employeeId:string) => {
        try {
            const response = await $api.delete(`employee/${employeeId}`);
            return response
        } catch (err) {
            ErrorHandler.handleError(err, router);
        }finally {
            employeeStore.loadingApi = false;
        }
    }

    const createEmployee = async (createEmployeeDto:CreateEmployeeDto) => {
        try {
            const response = await $api.post(`employee`,createEmployeeDto);
            return response
        } catch (err) {
            ErrorHandler.handleError(err, router);
        }finally {
            employeeStore.loadingApi = false;
        }
    }

    const editEmployee = async (createEmployeeDto:CreateEmployeeDto, employeeId:string) => {
        try {
            const response = await $api.put(`employee/${employeeId}`,createEmployeeDto);
            return response
        } catch (err) {
            ErrorHandler.handleError(err, router);
        }finally {
            employeeStore.loadingApi = false;
        }
    }







    return {
        getEmployeesList,
        getEmployee,
        removeEmployee,
        createEmployee,
        editEmployee
    };
};



