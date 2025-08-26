<script setup lang="ts">


import SidebarMain from "~/components/global/sidbar/SidebarMain.vue";
</script>

<template>
  <div class="">
    <div class="w-full relative flex flex-col sm:flex-row justify-start items-start dark:bg-black bg-white">
      <div class="  h-full ">
        <SidebarMain/>
      </div>
      <div class="w-full h-full ">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>