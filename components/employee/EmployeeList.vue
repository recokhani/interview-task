<script setup lang="ts">
import { ref, onMounted } from 'vue';
import EmployeeLoading from "~/components/loading/EmployeeLoading.vue";
import {useEmployeeStore} from "~/stores/employee/useEmployeeStore";
import EmployeeForm from "~/components/employee/EmployeeForm.vue";
import { useApiList } from '~/composables/api/useApiList';
const { getEmployeesList, getEmployee } = useApiList();
const employeeStore = useEmployeeStore();
interface FamilyMember {
  name: string;
  dateOfBirth: string;
  relation: string;
}
interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  family?: FamilyMember[];
}
const showLoading = ref(true);
const employeeDataLoading = ref(true);
const employeeData = ref<Employee | null>(null);

const employees = ref<Employee[]>([]);

const expandedIndex = ref<number | null>(null);

const fetchEmployeeList = async () => {
  try {
    const res = await getEmployeesList();
    employees.value = res?.data;
  } catch (err) {
    console.error('Failed to fetch employees', err);
  }finally {
    showLoading.value = false;
  }
};

const fetchEmployeeDetails = async (employeeId: string) => {
  employeeDataLoading.value = true;
  try {
    const res = await getEmployee(employeeId);
    employeeData.value = res?.data;
  } catch (err) {
    console.error('Failed to fetch employee details', err);
  }
  finally {
    employeeDataLoading.value = false;
  }
};



// Trigger fetch when panel is expanded
const handlePanelChange = (newIndex: number | number[]) => {
  if (Array.isArray(newIndex)) return; // single panel mode
  expandedIndex.value = newIndex;
  const employee = employees.value[newIndex];
  if (!employee) {
    console.warn("No employee found at index", newIndex);
    return;
  }
  fetchEmployeeDetails(employee.id);
};


onMounted(() => {
  fetchEmployeeList();
});
</script>

<template>

  <v-container class="bg-gray-100 rounded-sm w-full h-full overflow-y-auto">
   <div class="w-full flex relative ">
<!--     <EmployeeLoading v-if="showLoading"/>-->
     <div class="w-full h-full">
       <div class="mb-4 flex justify-between  ">

         <span class="text-lg font-semibold">لیست کارمندان</span>
         <v-btn color="var(--color-sec)" @click="employeeStore.showEmployeeForm = true">
           افزودن کارمند جدید
         </v-btn>
       </div>
       <v-expansion-panels
           v-model="expandedIndex"
           @update:model-value="handlePanelChange"
           accordion
       >

         <v-expansion-panel
             v-for="(employee, index) in employees"
             :key="employee.id"
         >
           <v-expansion-panel-title>
             {{ employee.firstName }} {{ employee.lastName }}
           </v-expansion-panel-title>

           <v-expansion-panel-text>
             <v-card flat class="pa-3">
               <div v-if="employeeDataLoading" class="flex justify-center p-8">
                 <v-progress-circular indeterminate color="primary" />
               </div>
               <EmployeeForm v-else :employeeData="employeeData" :fetchData="fetchEmployeeList" />
             </v-card>
           </v-expansion-panel-text>
         </v-expansion-panel>
       </v-expansion-panels>
     </div>
   </div>

    <v-dialog
        v-model="employeeStore.showEmployeeForm"
        width="800"
        height="600"
    >
      <div class="w-full p-2 shadow bg-white rounded-[20px] overflow-auto">
        <EmployeeForm :fetchData="fetchEmployeeList"/>
      </div>
    </v-dialog>
  </v-container>
</template>
