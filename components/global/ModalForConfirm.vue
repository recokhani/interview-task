<script setup lang="ts">

import {useEmployeeStore} from "~/stores/employee/useEmployeeStore";

const employeeStore = useEmployeeStore();

const props = defineProps({
  'text': String,
  'icon': String,
  'btnText': String,
})

const emit = defineEmits(['button-click']);
</script>

<template>

  <v-dialog
      v-model="employeeStore.showModalConfirm"
      width="500"
      height="600"
  >
    <v-card


    >

      <div class="w-full h-full p-10 bg-bg">
        <!--      icon-->
        <div class="w-full flex justify-center items-center">
        <span
            class="bg-gray-100 w-[50px] h-[50px] rounded-[10px] flex justify-center items-center">
          <VIcon
              v-if="props.icon === 'remove'"
              size="35"
              color="red"
              class="mdi mdi-trash-can-outline"
          >

          </VIcon>
        </span>
        </div>
        <!--      text-->
        <div class="w-full flex justify-center items-center mt-6">
          <h1 class="text-[18px] text-text">{{ props.text }}</h1>
        </div>
      </div>

<!--      btn-->
      <div class="w-full bg-bg flex justify-center items-center pb-5">
          <span

              :class="employeeStore.loadingApi ? 'pointer-events-none' : null"
              @click="emit('button-click')"
              class="w-[120px] h-[35px] bg-red-500 rounded-[6px] flex justify-center items-center mx-1 text-white transition-all duration-50 cursor-pointer hover:opacity-50">

                <v-progress-circular v-if="employeeStore.loadingApi" color="primary" indeterminate></v-progress-circular>
                    <span v-else>
                      {{props.btnText}}
                    </span>
        </span>
        <span
            @click="employeeStore.showModalConfirm = false"
            class="w-[120px] h-[35px] bg-gray-400 rounded-[6px] flex justify-center items-center mx-1 text-white transition-all duration-50 cursor-pointer hover:opacity-50">
          لغو
        </span>

      </div>
    </v-card>

  </v-dialog>
</template>

<style scoped>

</style>