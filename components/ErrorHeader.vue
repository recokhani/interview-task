<script setup lang="ts">
import {useRouter} from "#vue-router";

const router = useRouter();
interface Props {
  statusCode?: string | number;
  description?: string;
}
defineProps<Props>();
</script>

<template> 
  <section class="error-container ">
    <span class="digit" v-for="(digit, index) in String(statusCode).split('')" :key="index">
      <span class="screen-reader-text">{{ digit }}</span>
    </span>
  </section>
  <p class="zoom-area">{{ description }}</p>
  <button @click="router.push('/')" class="mb-11 px-4 py-1 rounded text-white bg-[var(--color-800)]">بازگشت</button>
</template>

<style lang="scss" scoped>
//@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700");
//@import url("https://fonts.googleapis.com/css?family=Catamaran:400,800");

.error-container {
  text-align: center;
  font-size: 106px;
  //font-family: "Catamaran", sans-serif;
  font-weight: 800;
  margin: 70px 15px;
  direction: ltr;
}

.error-container > .digit {
  display: inline-block;
  position: relative;
  width: 136px; 
  height: 156px;
  border-radius: 999px;
  background: linear-gradient(
      -45deg,
      transparent 0%,
      rgba(0, 0, 0, 0.06) 50%,
      transparent 51%,
      transparent 100%
    ),
    linear-gradient(
      to top right,
      #99749d,
      #99749d,
      #b895ab,
      #cc9aa6,
      #d7969e,
      #ed8687,
      #ed8687
    );
  overflow: hidden;
  animation: bgshadow 5s infinite;
}

.screen-reader-text {
  // position: absolute;
  top: -9999em;
  left: -9999em;
}

.zoom-area {
  max-width: 490px;
  margin: 30px auto 30px;
  font-size: 19px;
  text-align: center;
  color: #b895ab;
}

@keyframes bgshadow {
  0% {
    box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);
  }
  45% {
    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  55% {
    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);
  }
}
</style>
