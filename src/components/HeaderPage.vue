<template>
  <section class="h-auto w-full sm:h-60 md:h-64 lg:h-72 flex justify-center">
    <div class="flex items-center border-b-2 border-gray-400">

      <div class="sm:flex">
        <div class="flex justify-center">
          <div
            class="avatar-bg w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-white-100 rounded-full shadow-2xl flex justify-center items-center">
            <div class="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-cornflower-200 rounded-full">
              <img src="../assets/avatar.png" alt="avatar" />
            </div>
          </div>
        </div>

        <div class="ps-16 pt-5 pe-16">
          <h1 class="font-poppins text-lg sm:text-2xl lg:text-4xl font-bold text-center sm:text-left">
            Arturo Ramos
          </h1>
          <p class="font-poppins text-md text-center sm:text-left">
            I'm a passionate web development and design UI/UX.
          </p>
        </div>
        <div class="flex justify-end">
          <dark-mode-button @dark-mode-activated="enableDarkMode"
            @light-mode-activated="enableLightMode"></dark-mode-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import DarkModeButton from "./buttons/DarkModeButton.vue";

const emit = defineEmits(['dark-mode-activated', 'light-mode-activated'])


const enableDarkMode = () => {
  emit('dark-mode-activated');
}

const enableLightMode = () => {
  emit('light-mode-activated');
}

</script>
