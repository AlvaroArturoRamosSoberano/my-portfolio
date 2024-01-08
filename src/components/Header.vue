<template>
  <section class="flex justify-end">
    <dark-mode-button @dark-mode-activated="enableDarkMode" @light-mode-activated="enableLightMode"></dark-mode-button>
  </section>

  <section>
    <div class="flex flex-col items-center">
      <div class="w-full sm:w-auto sm:flex border-b-2 border-gray-400 py-6 px-6">
        <section class="avatar flex justify-center">
          <div
            class="avatar-bg w-36 h-36  md:w-40 md:h-40 bg-white-50 rounded-full shadow-xl shadow-white-500/50 flex justify-center items-center">
            <div class="w-32 h-32 md:w-36 md:h-36 bg-royal-200 rounded-full">
              <img src="../assets/icons/header/avatar.png" alt="avatar" />
            </div>
          </div>
        </section>

        <section>
          <div class="flex flex-col font-poppins items-center sm:items-start gap-2 text-center py-8 sm:ps-8 ">
            <h1 class="text-2xl sm:text-4xl font-bold text-slate-600">
              Arturo Ramos
            </h1>
            <p class="text-sm sm:text-lg  text-slate-700 ">
              I'm a passionate web development and design UI/UX.
            </p>
            <div class="flex">
              <looking-job-button></looking-job-button>
              <resume-button></resume-button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import DarkModeButton from "./buttons/header/DarkModeButton.vue";
import LookingJobButton from "./buttons/header/LookingJobButton.vue";
import ResumeButton from "./buttons/header/ResumeButton.vue";
const emit = defineEmits(['dark-mode-activated', 'light-mode-activated'])


const enableDarkMode = () => {
  emit('dark-mode-activated');
}

const enableLightMode = () => {
  emit('light-mode-activated');
}

</script>
