<script setup lang="ts">

const props = defineProps<{
  msg: string
}>();

</script>

<template>
  <div
       class="w-full my-2 flex justify-center items-center flex-col"
  >
    <div class="w-[340px] h-[200px]">
      <img class="w-full h-full" src="@/assets/images/empty-salon.png" alt="">
    </div>
    <span class="text-text">{{msg}}</span>
  </div>
</template>

<style scoped>

</style>