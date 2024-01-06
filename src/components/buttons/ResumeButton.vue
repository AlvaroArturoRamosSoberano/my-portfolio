<template>
    <section class="pb-2 ps-2">
        <div class="flex justify-center sm:justify-start">
            <button class="w-auto h-9 bg-cyan-300 shadow-lg shadow-cyan-500/50 hover:bg-gray-400 rounded-lg flex justify-center items-center ">
                <DocumentArrowDownIcon class="w-5 h-5 my-2 mx-2"></DocumentArrowDownIcon>
                <a href="/src/assets/CV_Arturo_Ramos_-_Software-Engineer.pdf" class="pe-4 font-poppins text-center text-sm">Resume</a>
            </button>
        </div>
    </section>
</template>

<script setup>
import { DocumentArrowDownIcon } from '@heroicons/vue/24/solid';
</script>