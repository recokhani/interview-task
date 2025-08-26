<script setup lang="ts">

import EmployeeList from "~/components/employee/EmployeeList.vue";
import EmployeeForm from "~/components/employee/EmployeeForm.vue";
import {useEmployeeStore} from "~/stores/employee/useEmployeeStore";
import {Toaster} from "vue-sonner";
const employeeStore = useEmployeeStore();
</script>

<template>
  <Toaster
      :toastOptions="{
           style: { direction:'rtl'},
              class: 'my-toast',
            classes: {
            error: 'bg-red-500 text-white',
              success: 'bg-green-300 text-gray-800',
              warning: 'text-yellow-400',
              info: 'bg-blue-400',
            }
        }"
      :duration="3000"
      position="top-center" />

  <div class="w-full h-dvh ">
    <EmployeeList/>
  </div>



</template>

