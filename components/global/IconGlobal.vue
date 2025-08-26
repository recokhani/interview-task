<script setup lang="ts">

const props = withDefaults(
    defineProps<{
      name: string,
      size: string,
      color: string,
    }>(),
    {
      name:'home',
      size:18,
      color:'var(--color-sec)'
    }
)
</script>

<template>

  <span>
    <VIcon
        :class="`mdi mdi-${name}-outline`"
        :size="size"
        :color="color"
    >

    </VIcon>
  </span>
</template>

<style scoped>

</style>