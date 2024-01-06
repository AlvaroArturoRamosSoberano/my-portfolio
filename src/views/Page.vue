<template>
  <section :class="` h-screen w-screen ${color} `">
    <div class="w-full p-4">
      <HeaderPage @dark-mode-activated="enableDarkMode" @light-mode-activated="enableLightMode" />
      <!-- <main-page></main-page> -->
    </div>
  </section>
</template>

<script setup>
import HeaderPage from "@/components/HeaderPage.vue";
import { ref } from 'vue'
const color = ref('bg-shark-600')

const enableDarkMode = () => {
  color.value = "bg-shark-600"
}

const enableLightMode = () => {
  color.value = "bg-white-50"

}
</script>
