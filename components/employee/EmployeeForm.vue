<script setup lang="ts">
import { ref } from 'vue';
import DatePicker from 'vue3-persian-datetime-picker';
import {useEmployeeStore} from "~/stores/employee/useEmployeeStore";
import {type CreateEmployeeDto, Relation, RelationOptions} from "~/types/employee/employee";
const employeeStore = useEmployeeStore();
import { useApiList } from '~/composables/api/useApiList';
import {toast} from "vue-sonner";
const { createEmployee, removeEmployee, editEmployee } = useApiList();

const props = defineProps<{ employeeData?: CreateEmployeeDto | null , fetchData:()=>Promise<any> }>();

const employeeId = ref<string>('');
const fillForm = (data: any) => {
  employeeId.value = data.id;
  employee.value = {
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    email: data.email || '',
    dateOfBirth: data.dateOfBirth || '',
    family: data.family?.length
        ? data.family.map((m: any) => ({
          name: m.name || '',
          dateOfBirth: m.dateOfBirth || '',
          relation: m.relation || '',
        }))
        : [],
  };
};
const emptyEmployee = (): CreateEmployeeDto => ({
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: '',
  family: [],
});

const employee = ref<CreateEmployeeDto>(emptyEmployee());

watch(
    () => props.employeeData,
    (newVal) => {
      if (newVal) {
        fillForm(newVal);
      } else {
        employee.value = emptyEmployee();
      }
    },
    { immediate: true }
);




const addFamilyMember = () => {
  employee?.value.family?.push({
    name: '',
    dateOfBirth: '',
    relation: Relation.spouse,
  });
};

const removeFamilyMember = (index: number) => {
  employee?.value.family?.splice(index, 1);
};


const saveEmployee = async () => {
  // create employee
  employeeStore.loadingApi = true;
  if(!props.employeeData) {
    const res = await createEmployee(employee.value)
    if(res?.data){
     await props.fetchData();
      employeeStore.showEmployeeForm = false;
      toast.success('عملیات با موفقیت انجام شد');
      emptyEmployee();
    }

    return;
  }

  console.log('go to edit')

  console.log('employee',employeeId.value);
  const res = await editEmployee(employee.value, employeeId.value )
  // if(res?.data){
  //   await props.fetchDetails();
  //   employeeStore.showEmployeeForm = false;
  //   toast.success('عملیات با موفقیت انجام شد');
  //   emptyEmployee();
  // }

};

const deleteEmployee = async () => {
  employeeStore.loadingApi = true;
  const res = await removeEmployee(employeeId.value);
  await props.fetchData();
  toast.success('حذف کاربر با موفقیت انجام شد')
  setTimeout(()=>{
    employeeStore.showModalConfirm = false;
  },500)
}

</script>

<template>
  <div
      class="container max-w-7xl  p-4"
      :class="employeeStore.loadingApi ? 'pointer-events-none opacity-50':null"
  >
    <div class="w-full px-2 flex justify-between items-center">
      <h2 class="text-lg font-semibold mb-4">
        {{ props.employeeData ? "ویرایش کارمند" : "افزودن کارمند" }}
      </h2>
      <span v-if="props.employeeData" class="cursor-pointer" @click="employeeStore.showModalConfirm = true">
        <IconGlobal name="trash-can" color="red" size="22"/>
      </span>
    </div>

    <!-- Employee fields -->
    <div class="flex flex-wrap gap-4 mb-4">
      <v-text-field color="var(--color-sec)" variant="outlined" v-model="employee.firstName" label="نام" />
      <v-text-field color="var(--color-sec)" variant="outlined" v-model="employee.lastName" label="نام خانوادگی" />
      <div class="w-full flex justify-between">
        <div class="w-[49%]">
          <ClientOnly :ssr="false">
            <DatePicker
                v-model="employee.dateOfBirth"
                type="date"
                format="YYYY-MM-DD"
                display-format="YYYY/MM/DD"
                :autoClose="true"
                placeholder="تاریخ تولد"
                class="w-full"
                color="var(--color-sec)"
            />
          </ClientOnly>
        </div>
        <div class="w-[49%]">
          <v-text-field color="var(--color-sec)" variant="outlined" v-model="employee.email" label="ایمیل" />
        </div>
      </div>

    </div>

    <!-- Family Members -->
    <h3 class="text-md font-semibold mt-6 mb-2">اعضای خانواده</h3>

    <div v-for="(member, index) in employee.family" :key="index" class="mt-5 p-6 border rounded relative">
      <div class="  absolute -top-4 right-2 ">
        <span class="px-2 text-white rounded-sm bg-[var(--color-sec)]">
          {{index+1}}#
        </span>
      </div>
      <div class="flex flex-wrap gap-4 mb-4">
        <div class="w-full flex justify-between">

          <div class="w-full sm:w-[48%] ">
            <v-text-field color="var(--color-sec)" variant="outlined" v-model="member.name" label="نام" />
          </div>
          <div class="w-full sm:w-[49%]">
            <v-select
                variant="outlined"
                label="نسبت"
                v-model="member.relation"
                :items="RelationOptions"
                item-title="label"
                item-value="value"
            />
          </div>
        </div>
        <div class="w-full sm:w-[49%]">
          <ClientOnly :ssr="false">
            <DatePicker
                v-model="member.dateOfBirth"
                type="date"
                format="YYYY-MM-DD"
                display-format="YYYY/MM/DD"
                :autoClose="true"
                placeholder="تاریخ تولد"
                class="w-full"
                color="var(--color-sec)"
            />
          </ClientOnly>
        </div>
      </div>

     <div class="absolute -top-4 -left-2">
       <v-btn color="red" icon  @click="removeFamilyMember(index)">
         <IconGlobal name="trash-can" size="16" color="white"/>
       </v-btn>
     </div>
    </div>

    <v-btn color="var(--color-sec)" class="mt-2" @click="addFamilyMember">
      افزودن عضو
    </v-btn>

    <div class="my-4 flex justify-end items-center gap-2 w-full ">
      <span class="cursor-pointer" @click="employeeStore.showEmployeeForm = false">انصراف</span>
      <v-btn color="var(--color-main)" class="text-white" @click="saveEmployee">
        <v-progress-circular v-if="employeeStore.loadingApi" color="var(--color-sec)" size="18" indeterminate></v-progress-circular>
        <span v-else>
          {{ props.employeeData ? "بروزرسانی" : "ذخیره اطلاعات" }}
        </span>
      </v-btn>
    </div>
  </div>





    <ModalForConfirm
        :text="'آیا میخواهید این کارمند را حذف کنید ؟ '"
        :btnText="'بله حذف کن'"
        :icon="'remove'"
        @button-click="deleteEmployee"
    />
</template>


