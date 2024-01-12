<template>
    <section class="pb-2 ps-2">
        <div class="flex justify-center sm:justify-start">
            <button
                class="w-auto h-8 bg-royal-200 dark:bg-royal-100 shadow-lg shadow-royal-200/50 hover:bg-royal-100 rounded-lg flex justify-center items-center text-royal-500">
                <DocumentArrowDownIcon class="w-5 h-5 my-2 mx-2"></DocumentArrowDownIcon>
                <a href="https://drive.google.com/file/d/1hNbBFBgO2QefdngXkJtoAiq9jzolxl9A/view?usp=drive_link"
                    class="pe-2.5 font-poppins font-semibold  text-center text-sm">Resume</a>
            </button>
        </div>
    </section>
</template>

<script setup>
import { DocumentArrowDownIcon } from '@heroicons/vue/24/solid';
</script>