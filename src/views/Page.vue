<template>
  <section :class="` h-auto w-auto ${color} `">
    <div class="w-auto p-4 flex justify-start md:justify-center">
      <div class="flex flex-col">
        <Header @dark-mode-activated="enableDarkMode" @light-mode-activated="enableLightMode" />
        <Main></Main>
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue"
import { ref } from 'vue'
const color = ref('bg-white-50')

const enableDarkMode = () => {
  color.value = "bg-shark-600"
}

const enableLightMode = () => {
  color.value = "bg-white-50"

}
</script>
