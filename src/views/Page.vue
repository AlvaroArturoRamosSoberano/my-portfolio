<template>
  <section class="h-auto w-auto bg-white-50 dark:bg-gray-800">
    <div class="w-auto p-4 flex justify-start md:justify-center">
      <div class="flex flex-col">
        <Header />
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

</script>
