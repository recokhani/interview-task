<script setup lang="ts">
import {useRouter , useRoute} from "#vue-router";
definePageMeta({
  layout: 'dd'
})
// definePage({
//   alias: "/pages/misc/not-found/:error(.*)",
//   meta: {
//     layout: "blank",
//     public: true,
//   },
// });
const route = useRoute();

const errorCode = computed(() => {
  const error = route.params.error as string | undefined;

  const errorNumber = error ? Number(error) : NaN;
  return isNaN(errorNumber) ? 404 : errorNumber;
});

const errorMessage = computed(() => {
  if (errorCode.value === 401) {
    return "اجازه دسترسی به این صفحه را ندارید";
  } else if (errorCode.value === 403) {
    return "اجازه دسترسی به این صفحه را ندارید";
  } else if (errorCode.value === 500) {
    return "خطا در برقراری ارتباط با سرور ";
  } else {
    return "صفحه ای که میخواستی رو نتونستیم پیدا کنیم!";
  }
});
</script>

<template>
  <div class="misc-wrapper">
    <ErrorHeader :status-code="errorCode" :description="errorMessage" />
  </div>
</template>

<style lang="scss">
.misc-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
