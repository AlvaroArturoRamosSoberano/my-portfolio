<template>
  <section :class="` h-auto w-auto ${color} dark:bg-gray-800` ">
    <div class="w-auto p-4 flex justify-start md:justify-center">
      <div class="flex flex-col">
        <Header @dark-mode-activated="enableDarkMode" @light-mode-activated="enableLightMode" />
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
import { ref } from 'vue'

const color = ref('bg-white-50')

const enableDarkMode = () => {
  color.value = "bg-gray-800"
}

const enableLightMode = () => {
  color.value = "bg-white-50"

}
</script>
