<script setup lang="ts">

const emit = defineEmits(['close'])
</script>

<template>
<span

    @click="$emit('close')"
    class="w-[22px] h-[22px] absolute top-3 left-3 z-10 flex justify-center items-center rounded-full shadow bg-white cursor-pointer hover:opacity-80">
  <VIcon
      class="mdi mdi-close"
      color="var(--color-sec)"
      size="18"
  >

  </VIcon>
</span>
</template>

<style scoped>

</style>