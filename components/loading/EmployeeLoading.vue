<script setup lang="ts">

</script>

<template>

  <div class="  w-full z-10 flex flex-col bg-white">
<!--    header-->
    <div class="w-full h-[100px] flex justify-between px-3 items-center bg-gray-200 animate-pulse">
      <div class="w-[150px] h-[40px] animate-pulse bg-gray-300">
      </div>
      <div class="w-[150px] h-[40px] animate-pulse bg-gray-300">

      </div>
    </div>

<!--    body-->
    <div class="w-full h-full p-3">
      <div
          v-for="(item,index) in 6"
          class="bg-gray-200 my-2  rounded-lg animate-pulse w-full h-[50px]"
      >

      </div>

    </div>
  </div>
</template>

<style scoped>

</style>