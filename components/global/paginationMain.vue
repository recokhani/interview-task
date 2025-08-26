<script setup lang="ts">
import {useGlobalStore} from "~/stores/global/useGlobalStore";
const globalStore = useGlobalStore();

const props = defineProps<{
  onPageChange: () => void;
}>();

watch(
    () => globalStore.pageNumber,
    () => {
      globalStore.loadingModal = true;
      props.onPageChange();
    }
);
</script>

<template>
<!--  loader-->
  <div v-if="globalStore.loadingModal"  class="w-full min-h-[600px] flex justify-center items-center">
    <v-progress-circular color="primary" indeterminate></v-progress-circular>
  </div>
  <div class="text-center" v-if="!globalStore.loadingModal && globalStore.totalNumber>1" @click="globalStore.withPagination = true">
    <div class="text-center">
      <v-pagination
          v-model="globalStore.pageNumber"
          :length="globalStore.totalNumber"
          :total-visible="5"
      ></v-pagination>
    </div>
  </div>
</template>

<style scoped>

</style>