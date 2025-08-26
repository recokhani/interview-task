<script setup lang="ts">
import {useGlobalStore} from "~/stores/global/useGlobalStore";

const globalStore = useGlobalStore();
</script>

<template>
  <div class=" w-full h-full flex  justify-center items-center relative">
    <div class="max-w-[600px] w-full h-dvh  overflow-hidden relative flex flex-col  justify-start items-start ">
      <div class=" w-full ">
        <HeaderMain/>
      </div>
      <div class="w-full   overflow-y-auto no-scrollbar mt-[1px] pb-[100px]  " :class="[!globalStore.showCategoryBar ? 'sm:mt-[8px]': 'sm:mt-[10px]']">
        <NuxtPage />
      </div>

      <div class="absolute w-full bottom-0 right-0 ">
        <NavigationMain/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>